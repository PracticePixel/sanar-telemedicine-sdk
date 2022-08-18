"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _AnimatedImage = _interopRequireDefault(require("../common/AnimatedImage"));

var _DotLoader = _interopRequireDefault(require("../common/DotLoader"));

var _SanarContext = _interopRequireDefault(require("../common/SanarContext"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  width,
  height
} = _reactNative.Dimensions.get('window');

const Connecting = props => {
  const {
    notification
  } = (0, _react.useContext)(_SanarContext.default);
  const {
    docProfile
  } = notification;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_AnimatedImage.default, {
    profileImage: docProfile
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.textContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.txtStyle
  }, "Connecting", /*#__PURE__*/_react.default.createElement(_DotLoader.default, {
    numberOfDots: 3,
    style: styles.dots
  }))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: width,
    height: height
  },
  textContainer: {
    marginTop: 80,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStyle: {
    fontWeight: '700',
    fontSize: 25,
    color: _theme.default.primaryColor
  },
  dots: {
    color: _theme.default.primaryColor,
    fontSize: 50
  }
});

var _default = Connecting;
exports.default = _default;
//# sourceMappingURL=Connecting.js.map