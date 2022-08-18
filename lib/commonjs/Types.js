"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SANAR_EVENT_TYPE = exports.CONNECTION_STATUS = void 0;
// enums
let SANAR_EVENT_TYPE;
exports.SANAR_EVENT_TYPE = SANAR_EVENT_TYPE;

(function (SANAR_EVENT_TYPE) {
  SANAR_EVENT_TYPE["Connect"] = "connect";
  SANAR_EVENT_TYPE["Disconnect"] = "disconnect";
  SANAR_EVENT_TYPE["Telecall"] = "VIDEO_CALL";
  SANAR_EVENT_TYPE["Message"] = "INCOMING_MESSAGE";
  SANAR_EVENT_TYPE["ConnectError"] = "connect_error";
})(SANAR_EVENT_TYPE || (exports.SANAR_EVENT_TYPE = SANAR_EVENT_TYPE = {}));

let CONNECTION_STATUS; // types

exports.CONNECTION_STATUS = CONNECTION_STATUS;

(function (CONNECTION_STATUS) {
  CONNECTION_STATUS[CONNECTION_STATUS["RINGING"] = 0] = "RINGING";
  CONNECTION_STATUS[CONNECTION_STATUS["CONNECTED"] = 1] = "CONNECTED";
  CONNECTION_STATUS[CONNECTION_STATUS["DISCONNECTED"] = 2] = "DISCONNECTED";
})(CONNECTION_STATUS || (exports.CONNECTION_STATUS = CONNECTION_STATUS = {}));
//# sourceMappingURL=Types.js.map