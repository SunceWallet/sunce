#!/bin/bash
set -eu -o pipefail

ipa="platforms/ios/build/Release-iphoneos/Sunce Wallet.ipa"
expected=$(/usr/bin/xmllint --xpath 'string(//*[local-name()="platform"][@name="ios"]/*[local-name()="preference"][@name="deployment-target"]/@value)' config.xml)
plist=$(zipinfo -1 "$ipa" | grep -E '^Payload/[^/]+\.app/Info\.plist$')
actual=$(unzip -p "$ipa" "$plist" | plutil -extract MinimumOSVersion raw -o - -)

echo "IPA MinimumOSVersion=$actual (configured $expected)"
[[ -n "$expected" && "$actual" == "$expected" ]]
