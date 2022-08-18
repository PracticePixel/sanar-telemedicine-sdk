"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Ringer", {
  enumerable: true,
  get: function () {
    return _Ringer.default;
  }
});
Object.defineProperty(exports, "SanarAppointments", {
  enumerable: true,
  get: function () {
    return _SanarAppointments.default;
  }
});
Object.defineProperty(exports, "SanarBooking", {
  enumerable: true,
  get: function () {
    return _SanarBooking.default;
  }
});
Object.defineProperty(exports, "SanarChat", {
  enumerable: true,
  get: function () {
    return _SanarChat.default;
  }
});
Object.defineProperty(exports, "SanarTelemedicine", {
  enumerable: true,
  get: function () {
    return _SanarTelemedicine.default;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Types = require("./Types");

var _SanarTelemedicine = _interopRequireDefault(require("./SanarTelemedicine"));

var _Ringer = _interopRequireDefault(require("./components/Ringer"));

var _SanarBooking = _interopRequireDefault(require("./SanarBooking"));

var _SanarChat = _interopRequireDefault(require("./SanarChat"));

var _SanarAppointments = _interopRequireDefault(require("./SanarAppointments"));

var _SanarProvider = _interopRequireDefault(require("./common/SanarProvider"));

var _Rtc = _interopRequireDefault(require("./Rtc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SanarRTC = _ref => {
  let {
    enable
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_SanarProvider.default, {
    enable: enable
  }, /*#__PURE__*/_react.default.createElement(_Rtc.default, null));
};

var _default = SanarRTC;
exports.default = _default;
//# sourceMappingURL=index.js.map