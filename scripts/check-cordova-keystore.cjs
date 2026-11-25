// Exercise the same bridge and encrypted store used on mobile without a device or a real wallet.
const assert = require("node:assert/strict")
require("tsx/cjs")
const { initKeyStore } = require("../src/App/cordova/storage.ts")
const { handleMessageEvent } = require("../src/App/cordova/ipc.ts")
const { Messages } = require("../shared/ipc.ts")

async function main() {
  let disk = "{}"
  const writes = []
  const storage = {
    get(resolve) { resolve(disk) },
    set(resolve, reject, key, data) {
      assert.equal(key, "keys")
      writes.push({ accept() { disk = data; resolve(key) }, reject })
    }
  }
  const store = await initKeyStore(storage)
  const responses = []
  const window = { postMessage: response => responses.push(response) }
  const send = (message, ...args) => handleMessageEvent(message, { callID: message, args }, window, storage, store)
  const tick = () => new Promise(resolve => setImmediate(resolve))

  const save = send(Messages.SaveKey, "fixture", "password", { value: "fixture" }, { name: "original" })
  await tick()
  assert.equal(responses.length, 0)
  assert.deepEqual(store.getKeyIDs(), [])
  writes.shift().accept()
  await save
  assert.equal(responses.pop().error, undefined)
  const reopened = await initKeyStore(storage)
  assert.deepEqual(reopened.getPrivateKeyData("fixture", "password"), { value: "fixture" })

  const rename = send(Messages.SavePublicKeyData, "fixture", { name: "changed" })
  const remove = send(Messages.RemoveKey, "fixture")
  await tick()
  assert.equal(writes.length, 1)
  assert.equal(responses.length, 0)
  writes.shift().reject("write failed")
  await rename
  assert.equal(responses.pop().error.message, "write failed")
  assert.deepEqual(store.getPublicKeyData("fixture"), { name: "original" })
  assert.deepEqual((await initKeyStore(storage)).getPublicKeyData("fixture"), { name: "original" })

  await tick()
  assert.equal(responses.length, 0)
  writes.shift().accept()
  await remove
  assert.equal(responses.pop().error, undefined)
  assert.deepEqual((await initKeyStore(storage)).getKeyIDs(), [])
}
main().catch(error => { console.error(error); process.exitCode = 1 })
