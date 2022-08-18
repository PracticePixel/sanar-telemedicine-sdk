"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  width,
  height
} = _reactNative.Dimensions.get('window');

const Container = props => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
    style: [styles.container, props.style]
  }), props.children);
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: height,
    width: width,
    zIndex: 2,
    paddingVertical: 20
  }
});

var _default = Container;
exports.default = _default;
//# sourceMappingURL=Container.js.map