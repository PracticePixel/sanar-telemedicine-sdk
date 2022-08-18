"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Types = require("./Types");

var _Ringer = _interopRequireDefault(require("./components/Ringer"));

var _RtcView = _interopRequireDefault(require("./RtcView"));

var _SanarContext = _interopRequireDefault(require("./common/SanarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Rtc = () => {
  const {
    ringing,
    status
  } = _react.default.useContext(_SanarContext.default);

  if (!ringing && status != _Types.CONNECTION_STATUS.CONNECTED) return null;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, ringing && /*#__PURE__*/_react.default.createElement(_Ringer.default, null), status == _Types.CONNECTION_STATUS.CONNECTED && /*#__PURE__*/_react.default.createElement(_RtcView.default, null));
};

var _default = Rtc;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute'
  }
});
//# sourceMappingURL=Rtc.js.map