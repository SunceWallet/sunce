// Run after a Vite production build. Both the renderer and the worker resolve external stellar.toml files.
const assert = require("node:assert/strict")
const { readFileSync, readdirSync } = require("node:fs")
const { createRequire } = require("node:module")
const { join } = require("node:path")

const sdkRequire = createRequire(require.resolve("@stellar/stellar-sdk"))
const pinnedVersion = require("../package.json").overrides["@stellar/stellar-sdk"].toml
assert.equal(sdkRequire("toml/package.json").version, pinnedVersion)

const dist = process.argv[2] || "dist"
const files = readdirSync(dist)
for (const chunk of ["stellar-sdk", "net-worker"]) {
  const map = files.find(name => name.startsWith(chunk + "-") && name.endsWith(".js.map"))
  assert.ok(map, `Missing production source map for ${chunk}`)
  const { sources, sourcesContent } = JSON.parse(readFileSync(join(dist, map), "utf8"))
  assert.ok(!sources.some(path => path.includes("@stellar/stellar-sdk/dist/")), `${chunk} uses the SDK's prebuilt parser`)
  for (const file of ["toml/lib/parser.js", "toml/lib/compiler.js"]) {
    const expected = readFileSync(sdkRequire.resolve(file), "utf8")
    const copies = sourcesContent.filter((_, index) => sources[index].endsWith("/" + file))
    assert.ok(
      copies.length > 0 && copies.every(source => source === expected),
      `${chunk} must ship ${file} from toml@${pinnedVersion}`
    )
  }
}
