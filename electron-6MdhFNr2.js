import { bS as pick, a4 as CustomError } from "./app-DBEXmgIl.js";
let nextCallID = 1;
function call(messageType, ...args) {
  const callID = nextCallID++;
  window.electron.sendIPCMessage(messageType, {
    args,
    callID
  });
  return new Promise((resolve, reject) => {
    const unsubscribe = window.electron.subscribeToIPCMessages(messageType, (event, message) => {
      if (!message || typeof message !== "object" || message.callID !== callID) {
        return;
      }
      unsubscribe();
      if ("error" in message && message.error) {
        const error = message.error;
        const extra = error.__extraProps ? pick(error, error.__extraProps || []) : void 0;
        reject(CustomError(error.name, error.message, extra));
      } else {
        resolve(message.result);
      }
    });
  });
}
function subscribeToMessages(messageType, callback) {
  return window.electron.subscribeToIPCMessages(messageType, (event, message) => callback(message));
}
export {
  call,
  subscribeToMessages
};
//# sourceMappingURL=electron-6MdhFNr2.js.map
