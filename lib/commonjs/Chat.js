"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Chat = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Chat Component"));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

var _default = Chat;
exports.default = _default;
//# sourceMappingURL=Chat.js.map