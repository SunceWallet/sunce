"""Check an open Sunce screen on a portrait Android 16 emulator using gesture navigation.

Run with adb on PATH and set ANDROID_SERIAL if needed. Open the accounts list, an
account, or Send/Receive and pass accounts, account, or dialog. Add --ime while typing.
"""
import argparse
import re
import struct
import subprocess
import xml.etree.ElementTree as ET


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("screen", choices=["accounts", "account", "dialog"])
parser.add_argument("--ime", action="store_true", help="expect the keyboard to touch the WebView")
args = parser.parse_args()


def adb(*command):
    return subprocess.check_output(["adb", *command])


def bounds(node):
    return tuple(map(int, re.findall(r"-?\d+", node.attrib["bounds"])))


# The hierarchy and screenshot stay in memory. Report only geometry and RGB.
dump = adb("exec-out", "uiautomator", "dump", "/dev/tty").decode()
tree = ET.fromstring(dump[dump.index("<hierarchy"):dump.index("</hierarchy>") + len("</hierarchy>")])
webview = tree.find(".//node[@package='org.montelibero.sunce'][@class='android.webkit.WebView']")
assert webview is not None, "Open Sunce first"
_, top, _, bottom = bounds(webview)
buttons = [bounds(n) for n in webview.iter("node") if n.get("class") == "android.widget.Button"]
density = int(re.findall(r"density: (\d+)", adb("shell", "wm", "density").decode())[-1]) / 160
assert any(top <= y <= top + 6 * density and h - y >= 40 * density for _, y, _, h in buttons), (
    "Expected a full toolbar button within 6 dp of the safe area"
)

raw = adb("exec-out", "screencap")
width, height, fmt = struct.unpack_from("<III", raw)
header = len(raw) - width * height * 4
assert fmt in (1, 2) and header in (12, 16), "Expected an RGBA/RGBX emulator screenshot"


def check_pixel(x, y, color):
    offset = header + (width * y + x) * 4
    rgb = raw[offset:offset + 3]
    assert max(abs(a - b) for a, b in zip(rgb, bytes.fromhex(color))) <= 3, (
        f"Pixel ({x}, {y}) is #{rgb.hex()}, expected #{color}"
    )


top_color = "fcfcfc" if args.screen == "dialog" else "ebbe2c"
for x in (width // 8, width * 7 // 8):
    check_pixel(x, 2, top_color)
    check_pixel(x, top, top_color)

if args.ime:
    window = adb("shell", "dumpsys", "window").decode()
    assert re.search(rf"type=ime frame=\[0,{bottom}\].*?visible=true", window), "Gap or overlap at keyboard"
else:
    bottom_color = "d6a400" if args.screen == "accounts" else "fcfcfc"
    for x in range(width):
        check_pixel(x, bottom - 1, bottom_color)
        check_pixel(x, bottom, bottom_color)
    check_pixel(width // 8, height - 2, bottom_color)

print(f"{args.screen} passed on {width}×{height}, WebView y={top}…{bottom}")
