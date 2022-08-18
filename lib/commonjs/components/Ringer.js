"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _SanarContext = _interopRequireDefault(require("../common/SanarContext"));

var _AnimatedImage = _interopRequireDefault(require("../common/AnimatedImage"));

var _reactNativeSvgIcon = _interopRequireDefault(require("react-native-svg-icon"));

var _SanarSVG = _interopRequireDefault(require("../common/SanarSVG"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Icon = props => /*#__PURE__*/_react.default.createElement(_reactNativeSvgIcon.default, _extends({}, props, {
  svgs: _SanarSVG.default
}));

const {
  width,
  height
} = _reactNative.Dimensions.get('window');

const Ringer = () => {
  const {
    notification,
    acceptCall,
    disconnectCall
  } = (0, _react.useContext)(_SanarContext.default);
  const {
    docName,
    type,
    docProfile
  } = notification;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_AnimatedImage.default, {
    profileImage: docProfile
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.textContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.doctorName
  }, docName || ''), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.callTypeText
  }, type || '')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.btnContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => disconnectCall(),
    style: styles.disconnectBtn
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    name: "callDisconnectSv",
    height: 28,
    width: 28
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => acceptCall(),
    style: styles.acceptBtn
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    name: "callAccept",
    height: 20,
    width: 20
  }))));
};

var _default = Ringer;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: width,
    height: height
  },
  textContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  btnContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '12%',
    position: 'absolute',
    bottom: 60,
    width: '100%'
  },
  disconnectBtn: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  acceptBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1abc9c',
    width: 80,
    height: 80,
    borderRadius: 100
  },
  doctorName: {
    fontWeight: '700',
    fontSize: 20,
    color: _theme.default.textDarkColor
  },
  callTypeText: {
    fontSize: 18,
    fontWeight: '400',
    color: _theme.default.textGrayColor,
    marginTop: 10
  }
});
//# sourceMappingURL=Ringer.js.map