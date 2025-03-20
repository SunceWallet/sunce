import { aO as Buffer, bT as requireNaclFast, aH as Messages, a5 as libExports$1, ap as WrongPasswordError } from "./app-DBEXmgIl.js";
var lib = {};
var sha256$1 = { exports: {} };
var sha256 = sha256$1.exports;
var hasRequiredSha256;
function requireSha256() {
  if (hasRequiredSha256) return sha256$1.exports;
  hasRequiredSha256 = 1;
  (function(module) {
    (function(root, factory) {
      var exports = {};
      factory(exports);
      var sha2562 = exports["default"];
      for (var k in exports) {
        sha2562[k] = exports[k];
      }
      {
        module.exports = sha2562;
      }
    })(sha256, function(exports) {
      exports.__esModule = true;
      exports.digestLength = 32;
      exports.blockSize = 64;
      var K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      function hashBlocks(w, v, p, pos, len) {
        var a, b, c, d, e, f, g, h, u, i, j, t1, t2;
        while (len >= 64) {
          a = v[0];
          b = v[1];
          c = v[2];
          d = v[3];
          e = v[4];
          f = v[5];
          g = v[6];
          h = v[7];
          for (i = 0; i < 16; i++) {
            j = pos + i * 4;
            w[i] = (p[j] & 255) << 24 | (p[j + 1] & 255) << 16 | (p[j + 2] & 255) << 8 | p[j + 3] & 255;
          }
          for (i = 16; i < 64; i++) {
            u = w[i - 2];
            t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
            u = w[i - 15];
            t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
          }
          for (i = 0; i < 64; i++) {
            t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
            t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          }
          v[0] += a;
          v[1] += b;
          v[2] += c;
          v[3] += d;
          v[4] += e;
          v[5] += f;
          v[6] += g;
          v[7] += h;
          pos += 64;
          len -= 64;
        }
        return pos;
      }
      var Hash = (
        /** @class */
        function() {
          function Hash2() {
            this.digestLength = exports.digestLength;
            this.blockSize = exports.blockSize;
            this.state = new Int32Array(8);
            this.temp = new Int32Array(64);
            this.buffer = new Uint8Array(128);
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            this.reset();
          }
          Hash2.prototype.reset = function() {
            this.state[0] = 1779033703;
            this.state[1] = 3144134277;
            this.state[2] = 1013904242;
            this.state[3] = 2773480762;
            this.state[4] = 1359893119;
            this.state[5] = 2600822924;
            this.state[6] = 528734635;
            this.state[7] = 1541459225;
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            return this;
          };
          Hash2.prototype.clean = function() {
            for (var i = 0; i < this.buffer.length; i++) {
              this.buffer[i] = 0;
            }
            for (var i = 0; i < this.temp.length; i++) {
              this.temp[i] = 0;
            }
            this.reset();
          };
          Hash2.prototype.update = function(data, dataLength) {
            if (dataLength === void 0) {
              dataLength = data.length;
            }
            if (this.finished) {
              throw new Error("SHA256: can't update because hash was finished.");
            }
            var dataPos = 0;
            this.bytesHashed += dataLength;
            if (this.bufferLength > 0) {
              while (this.bufferLength < 64 && dataLength > 0) {
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
              }
              if (this.bufferLength === 64) {
                hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                this.bufferLength = 0;
              }
            }
            if (dataLength >= 64) {
              dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
              dataLength %= 64;
            }
            while (dataLength > 0) {
              this.buffer[this.bufferLength++] = data[dataPos++];
              dataLength--;
            }
            return this;
          };
          Hash2.prototype.finish = function(out) {
            if (!this.finished) {
              var bytesHashed = this.bytesHashed;
              var left = this.bufferLength;
              var bitLenHi = bytesHashed / 536870912 | 0;
              var bitLenLo = bytesHashed << 3;
              var padLength = bytesHashed % 64 < 56 ? 64 : 128;
              this.buffer[left] = 128;
              for (var i = left + 1; i < padLength - 8; i++) {
                this.buffer[i] = 0;
              }
              this.buffer[padLength - 8] = bitLenHi >>> 24 & 255;
              this.buffer[padLength - 7] = bitLenHi >>> 16 & 255;
              this.buffer[padLength - 6] = bitLenHi >>> 8 & 255;
              this.buffer[padLength - 5] = bitLenHi >>> 0 & 255;
              this.buffer[padLength - 4] = bitLenLo >>> 24 & 255;
              this.buffer[padLength - 3] = bitLenLo >>> 16 & 255;
              this.buffer[padLength - 2] = bitLenLo >>> 8 & 255;
              this.buffer[padLength - 1] = bitLenLo >>> 0 & 255;
              hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
              this.finished = true;
            }
            for (var i = 0; i < 8; i++) {
              out[i * 4 + 0] = this.state[i] >>> 24 & 255;
              out[i * 4 + 1] = this.state[i] >>> 16 & 255;
              out[i * 4 + 2] = this.state[i] >>> 8 & 255;
              out[i * 4 + 3] = this.state[i] >>> 0 & 255;
            }
            return this;
          };
          Hash2.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
          };
          Hash2.prototype._saveState = function(out) {
            for (var i = 0; i < this.state.length; i++) {
              out[i] = this.state[i];
            }
          };
          Hash2.prototype._restoreState = function(from, bytesHashed) {
            for (var i = 0; i < this.state.length; i++) {
              this.state[i] = from[i];
            }
            this.bytesHashed = bytesHashed;
            this.finished = false;
            this.bufferLength = 0;
          };
          return Hash2;
        }()
      );
      exports.Hash = Hash;
      var HMAC = (
        /** @class */
        function() {
          function HMAC2(key) {
            this.inner = new Hash();
            this.outer = new Hash();
            this.blockSize = this.inner.blockSize;
            this.digestLength = this.inner.digestLength;
            var pad = new Uint8Array(this.blockSize);
            if (key.length > this.blockSize) {
              new Hash().update(key).finish(pad).clean();
            } else {
              for (var i = 0; i < key.length; i++) {
                pad[i] = key[i];
              }
            }
            for (var i = 0; i < pad.length; i++) {
              pad[i] ^= 54;
            }
            this.inner.update(pad);
            for (var i = 0; i < pad.length; i++) {
              pad[i] ^= 54 ^ 92;
            }
            this.outer.update(pad);
            this.istate = new Uint32Array(8);
            this.ostate = new Uint32Array(8);
            this.inner._saveState(this.istate);
            this.outer._saveState(this.ostate);
            for (var i = 0; i < pad.length; i++) {
              pad[i] = 0;
            }
          }
          HMAC2.prototype.reset = function() {
            this.inner._restoreState(this.istate, this.inner.blockSize);
            this.outer._restoreState(this.ostate, this.outer.blockSize);
            return this;
          };
          HMAC2.prototype.clean = function() {
            for (var i = 0; i < this.istate.length; i++) {
              this.ostate[i] = this.istate[i] = 0;
            }
            this.inner.clean();
            this.outer.clean();
          };
          HMAC2.prototype.update = function(data) {
            this.inner.update(data);
            return this;
          };
          HMAC2.prototype.finish = function(out) {
            if (this.outer.finished) {
              this.outer.finish(out);
            } else {
              this.inner.finish(out);
              this.outer.update(out, this.digestLength).finish(out);
            }
            return this;
          };
          HMAC2.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
          };
          return HMAC2;
        }()
      );
      exports.HMAC = HMAC;
      function hash(data) {
        var h = new Hash().update(data);
        var digest = h.digest();
        h.clean();
        return digest;
      }
      exports.hash = hash;
      exports["default"] = hash;
      function hmac(key, data) {
        var h = new HMAC(key).update(data);
        var digest = h.digest();
        h.clean();
        return digest;
      }
      exports.hmac = hmac;
      function pbkdf2(password, salt, iterations, dkLen) {
        var prf = new HMAC(password);
        var len = prf.digestLength;
        var ctr = new Uint8Array(4);
        var t = new Uint8Array(len);
        var u = new Uint8Array(len);
        var dk = new Uint8Array(dkLen);
        for (var i = 0; i * len < dkLen; i++) {
          var c = i + 1;
          ctr[0] = c >>> 24 & 255;
          ctr[1] = c >>> 16 & 255;
          ctr[2] = c >>> 8 & 255;
          ctr[3] = c >>> 0 & 255;
          prf.reset();
          prf.update(salt);
          prf.update(ctr);
          prf.finish(u);
          for (var j = 0; j < len; j++) {
            t[j] = u[j];
          }
          for (var j = 2; j <= iterations; j++) {
            prf.reset();
            prf.update(u).finish(u);
            for (var k = 0; k < len; k++) {
              t[k] ^= u[k];
            }
          }
          for (var j = 0; j < len && i * len + j < dkLen; j++) {
            dk[i * len + j] = t[j];
          }
        }
        for (var i = 0; i < len; i++) {
          t[i] = u[i] = 0;
        }
        for (var i = 0; i < 4; i++) {
          ctr[i] = 0;
        }
        prf.clean();
        return dk;
      }
      exports.pbkdf2 = pbkdf2;
    });
  })(sha256$1);
  return sha256$1.exports;
}
var naclUtil$1 = { exports: {} };
var naclUtil = naclUtil$1.exports;
var hasRequiredNaclUtil;
function requireNaclUtil() {
  if (hasRequiredNaclUtil) return naclUtil$1.exports;
  hasRequiredNaclUtil = 1;
  (function(module) {
    (function(root, f) {
      if (module.exports) module.exports = f();
      else if (root.nacl) root.nacl.util = f();
      else {
        root.nacl = {};
        root.nacl.util = f();
      }
    })(naclUtil, function() {
      var util = {};
      function validateBase64(s) {
        if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s)) {
          throw new TypeError("invalid encoding");
        }
      }
      util.decodeUTF8 = function(s) {
        if (typeof s !== "string") throw new TypeError("expected string");
        var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
        for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
        return b;
      };
      util.encodeUTF8 = function(arr) {
        var i, s = [];
        for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
        return decodeURIComponent(escape(s.join("")));
      };
      if (typeof atob === "undefined") {
        if (typeof Buffer.from !== "undefined") {
          util.encodeBase64 = function(arr) {
            return Buffer.from(arr).toString("base64");
          };
          util.decodeBase64 = function(s) {
            validateBase64(s);
            return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, "base64"), 0));
          };
        } else {
          util.encodeBase64 = function(arr) {
            return new Buffer(arr).toString("base64");
          };
          util.decodeBase64 = function(s) {
            validateBase64(s);
            return new Uint8Array(Array.prototype.slice.call(new Buffer(s, "base64"), 0));
          };
        }
      } else {
        util.encodeBase64 = function(arr) {
          var i, s = [], len = arr.length;
          for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
          return btoa(s.join(""));
        };
        util.decodeBase64 = function(s) {
          validateBase64(s);
          var i, d = atob(s), b = new Uint8Array(d.length);
          for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
          return b;
        };
      }
      return util;
    });
  })(naclUtil$1);
  return naclUtil$1.exports;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  var __assign = lib && lib.__assign || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  var __awaiter = lib && lib.__awaiter || function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : new P(function(resolve2) {
          resolve2(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator = lib && lib.__generator || function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var __importStar = lib && lib.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result["default"] = mod;
    return result;
  };
  var __importDefault = lib && lib.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(lib, "__esModule", { value: true });
  var sha2562 = __importStar(requireSha256());
  var tweetnacl_1 = __importDefault(requireNaclFast());
  var tweetnacl_util_1 = __importDefault(requireNaclUtil());
  function randomNonce() {
    return tweetnacl_util_1.default.encodeBase64(tweetnacl_1.default.randomBytes(tweetnacl_1.default.secretbox.nonceLength));
  }
  function deriveHashFromPassword(password, metadata) {
    return sha2562.pbkdf2(tweetnacl_util_1.default.decodeUTF8(password), tweetnacl_util_1.default.decodeBase64(metadata.nonce), metadata.iterations, tweetnacl_1.default.secretbox.keyLength);
  }
  function decrypt(encryptedBase64, metadata, password) {
    var secretKey = deriveHashFromPassword(password, metadata);
    var decrypted = tweetnacl_1.default.secretbox.open(tweetnacl_util_1.default.decodeBase64(encryptedBase64), tweetnacl_util_1.default.decodeBase64(metadata.nonce), secretKey);
    if (!decrypted) {
      throw new Error("Decryption failed.");
    }
    return JSON.parse(tweetnacl_util_1.default.encodeUTF8(decrypted));
  }
  function encrypt(privateData, metadata, password) {
    var secretKey = deriveHashFromPassword(password, metadata);
    var data = tweetnacl_util_1.default.decodeUTF8(JSON.stringify(privateData));
    var encrypted = tweetnacl_1.default.secretbox(data, tweetnacl_util_1.default.decodeBase64(metadata.nonce), secretKey);
    return tweetnacl_util_1.default.encodeBase64(encrypted);
  }
  function createStore(save, initialKeys, options) {
    if (initialKeys === void 0) {
      initialKeys = {};
    }
    if (options === void 0) {
      options = {};
    }
    var _a = options.iterations, iterations = _a === void 0 ? 1e4 : _a;
    var keysData = initialKeys;
    function saveKey(keyID, password, privateData, publicData) {
      if (publicData === void 0) {
        publicData = {};
      }
      var metadata = {
        nonce: randomNonce(),
        iterations
      };
      keysData[keyID] = {
        metadata,
        public: publicData,
        private: encrypt(privateData, metadata, password)
      };
    }
    return {
      getKeyIDs: function() {
        return Object.keys(keysData);
      },
      getPublicKeyData: function(keyID) {
        return keysData[keyID].public;
      },
      getPrivateKeyData: function(keyID, password) {
        return decrypt(keysData[keyID].private, keysData[keyID].metadata, password);
      },
      saveKey: function(keyID, password, privateData, publicData) {
        if (publicData === void 0) {
          publicData = {};
        }
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                saveKey(keyID, password, privateData, publicData);
                return [4, save(keysData)];
              case 1:
                _a2.sent();
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      saveKeys: function(data) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                data.forEach(function(d) {
                  return saveKey(d.keyID, d.password, d.privateData, d.publicData);
                });
                return [4, save(keysData)];
              case 1:
                _a2.sent();
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      savePublicKeyData: function(keyID, publicData) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (!keysData[keyID]) {
                  throw new Error("Cannot save public data for key " + keyID + ". Key does not yet exist in store.");
                }
                keysData[keyID] = __assign({}, keysData[keyID], { public: publicData });
                return [4, save(keysData)];
              case 1:
                _a2.sent();
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      removeKey: function(keyID) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (!keysData[keyID]) {
                  throw new Error("Cannot delete key " + keyID + ". Key not found.");
                }
                delete keysData[keyID];
                return [4, save(keysData)];
              case 1:
                _a2.sent();
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
    };
  }
  lib.createStore = createStore;
  return lib;
}
var libExports = requireLib();
const callHandlers = {};
function call(messageType, ...args) {
  return new Promise((resolve, reject) => {
    try {
      const handler = callHandlers[messageType];
      if (handler) {
        const result = handler(...args);
        resolve(result);
      } else {
        reject(`No handler for ${messageType} found.`);
      }
    } catch (error) {
      reject(error);
    }
  });
}
function subscribeToMessages(messageType, callback) {
  return messageType === Messages.DeepLinkURL ? subscribeToDeepLinkURLs(callback) : () => void 0;
}
callHandlers[Messages.CopyToClipboard] = (text) => navigator.clipboard.writeText(text);
callHandlers[Messages.OpenLink] = (href) => window.open(href, "_blank");
callHandlers[Messages.CheckUpdateAvailability] = () => false;
callHandlers[Messages.StartUpdate] = () => void 0;
callHandlers[Messages.NotificationPermission] = () => window.Notification.permission;
callHandlers[Messages.RequestNotificationPermission] = window.Notification.requestPermission;
callHandlers[Messages.ShowNotification] = (localNotification) => {
  return new Promise((resolve) => {
    const notification = new Notification(localNotification.title, { body: localNotification.text });
    notification.addEventListener("click", () => {
      resolve();
      notification.close();
    });
  });
};
let isDefault = false;
let differentHandler = true;
callHandlers[Messages.IsDifferentHandlerInstalled] = () => differentHandler;
callHandlers[Messages.IsDefaultProtocolClient] = () => isDefault;
callHandlers[Messages.SetAsDefaultProtocolClient] = () => {
  window.navigator.registerProtocolHandler(
    "web+stellar",
    `${window.location.origin}/?uri=%s`,
    "Stellar request handler"
  );
  isDefault = true;
  differentHandler = false;
  return true;
};
const defaultTestingKeys = {
  "1": {
    metadata: {
      nonce: "19sHNxecdiik6chwGFgZVk9UJoG2k8B+",
      iterations: 1e4
    },
    public: {
      name: "Test account",
      password: false,
      publicKey: "GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W",
      testnet: true
    },
    private: "F6SxXmjdLgxPI3msiNWZ7RGHoBwYEdFICLHJqzIZOADn71lfBYFD/qvQxcD9L1Wq495cDek0RlNLGF2fNK8P48A+B7Hfk8hWL+o5EbPd1ql20r7SfxVh9o0="
  },
  "2": {
    metadata: {
      nonce: "PvRwEZlBBIdwo3BPrPCxMpjsxmDbQI1r",
      iterations: 1e4
    },
    public: {
      name: "Test account with password",
      password: true,
      publicKey: "GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W",
      testnet: true
    },
    private: "5VzbN/Y5S1CfizJnnIejm8ku4KsG5cPvRht6BoZ8HalOOKdOt66Ra/rjoNlMbh45Et+25iGggzj+IlFvpepmuaEFcdqj5myEJspcy4GGwn+9TtA+KmUDcRI="
  },
  "3": {
    metadata: {
      nonce: "ChxQagEiuX/R98SEtdL/vT8HiebThI5X",
      iterations: 1e4
    },
    public: {
      name: "Multisig Account",
      password: false,
      publicKey: "GDNVDG37WMKPEIXSJRBAQAVPO5WGOPKZRZZBPLWXULSX6NQNLNQP6CFF",
      testnet: true
    },
    private: "XFZM+iKm5YM6v2KdABGyczb9D51IdFPM3ibRhrVGfMonOKV8dVKvqC9JA1ylfcbEpzUaIUwPBjAxk7SIgcGhtjrqenp0Bj1QPqZwSWmAB5q5pfb5aLTdwVc="
  }
};
initKeyStore();
initSettings();
function initKeyStore() {
  const keys = localStorage.getItem("sunce:keys");
  const initialKeys = keys ? JSON.parse(keys) : defaultTestingKeys;
  function saveKeys(keysData) {
    localStorage.setItem("sunce:keys", JSON.stringify(keysData));
  }
  const keyStore = libExports.createStore(saveKeys, initialKeys, { iterations: 25e4 });
  callHandlers[Messages.GetKeyIDs] = keyStore.getKeyIDs;
  callHandlers[Messages.GetPublicKeyData] = keyStore.getPublicKeyData;
  callHandlers[Messages.GetPrivateKeyData] = keyStore.getPrivateKeyData;
  callHandlers[Messages.RemoveKey] = keyStore.removeKey;
  callHandlers[Messages.SaveKey] = keyStore.saveKey;
  callHandlers[Messages.SavePublicKeyData] = keyStore.savePublicKeyData;
  function signTransaction(internalAccountID, transactionXDR, password) {
    try {
      const account = keyStore.getPublicKeyData(internalAccountID);
      const networkPassphrase = account.testnet ? libExports$1.Networks.TESTNET : libExports$1.Networks.PUBLIC;
      const transaction = new libExports$1.Transaction(transactionXDR, networkPassphrase);
      const privateKey = keyStore.getPrivateKeyData(internalAccountID, password).privateKey;
      transaction.sign(libExports$1.Keypair.fromSecret(privateKey));
      return transaction.toEnvelope().toXDR().toString("base64");
    } catch (error) {
      throw WrongPasswordError();
    }
  }
  callHandlers[Messages.SignTransaction] = signTransaction;
}
const defaultSettings = {
  agreedToTermsAt: "2019-01-17T07:34:05.688Z",
  biometricLock: false,
  multisignature: true,
  testnet: true,
  trustedServices: [],
  hideMemos: false,
  showDust: false,
  showClaimableBalanceTxs: false
};
function initSettings() {
  const storedSettings = localStorage.getItem("sunce:settings");
  let settings = storedSettings ? JSON.parse(storedSettings) : defaultSettings;
  callHandlers[Messages.BioAuthAvailable] = () => ({ available: false, enrolled: false });
  callHandlers[Messages.ReadSettings] = () => settings;
  callHandlers[Messages.StoreSettings] = (updatedSettings) => {
    settings = {
      ...settings,
      ...updatedSettings
    };
    localStorage.setItem("sunce:settings", JSON.stringify(settings));
  };
  callHandlers[Messages.ReadIgnoredSignatureRequestHashes] = () => {
    const data = window.localStorage.getItem("wallet:storage:ignoredSignatureRequests");
    return data ? JSON.parse(data) : [];
  };
  callHandlers[Messages.StoreIgnoredSignatureRequestHashes] = (updatedSignatureRequestHashes) => {
    window.localStorage.setItem(
      "wallet:storage:ignoredSignatureRequests",
      JSON.stringify(updatedSignatureRequestHashes)
    );
  };
}
function subscribeToDeepLinkURLs(callback) {
  const uri = new URLSearchParams(window.location.search).get("uri");
  if (uri) {
    callback(uri);
  }
  return () => void 0;
}
export {
  call,
  subscribeToMessages
};
//# sourceMappingURL=web-OrCDcvNT.js.map
