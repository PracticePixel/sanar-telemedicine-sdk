"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ProgressiveImage = _interopRequireDefault(require("../common/ProgressiveImage"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DefaultUserImg = require('../Images/profile.png');

const windowWidth = _reactNative.Dimensions.get('window').width;

const AnimatedImage = props => {
  const docProfileImg = props.profileImage;
  const docImage = !docProfileImg ? {
    uri: 'https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
  } : DefaultUserImg;

  const [animateCircle, setAnimateCircle] = _react.default.useState(true); //:- Outer circle


  var outerCirHeight = _react.default.useRef(new _reactNative.Animated.Value(260)).current;

  var outerCirWidth = _react.default.useRef(new _reactNative.Animated.Value(260)).current;

  var outerCirRadius = _react.default.useRef(new _reactNative.Animated.Value(130)).current; //:- Inner circle


  var innerCirHeight = _react.default.useRef(new _reactNative.Animated.Value(220)).current;

  var innerCirWidth = _react.default.useRef(new _reactNative.Animated.Value(220)).current;

  var innerCirRadius = _react.default.useRef(new _reactNative.Animated.Value(110)).current;

  const animateOuterCircle = () => {
    //:- Outer circle Animation
    var width, height, radius;

    if (animateCircle) {
      width = height = 240;
      radius = 120;
    } else {
      width = height = 300;
      radius = 150;
    }

    _reactNative.Animated.parallel([_reactNative.Animated.timing(outerCirHeight, {
      toValue: height,
      duration: 600,
      useNativeDriver: false
    }), _reactNative.Animated.timing(outerCirWidth, {
      toValue: width,
      duration: 600,
      useNativeDriver: false
    }), _reactNative.Animated.timing(outerCirRadius, {
      toValue: radius,
      duration: 600,
      useNativeDriver: false
    })]).start(() => {
      animateInnerCircle();
    });

    setAnimateCircle(!animateCircle);
  };

  const animateInnerCircle = () => {
    //:- Inner circle Animation
    var width, height, radius;

    if (animateCircle) {
      width = height = 240;
      radius = 120;
    } else {
      width = height = 200;
      radius = 100;
    }

    _reactNative.Animated.parallel([_reactNative.Animated.timing(innerCirHeight, {
      toValue: height,
      duration: 600,
      useNativeDriver: false
    }), _reactNative.Animated.timing(innerCirWidth, {
      toValue: width,
      duration: 600,
      useNativeDriver: false
    }), _reactNative.Animated.timing(innerCirRadius, {
      toValue: radius,
      duration: 600,
      useNativeDriver: false
    })]).start();
  };

  (0, _react.useEffect)(() => {
    const interval = setInterval(() => {
      animateOuterCircle();
    }, 600);
    return () => clearInterval(interval);
  }, [animateCircle]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.proContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.outerCircle, {
      width: outerCirWidth,
      height: outerCirHeight,
      borderRadius: outerCirRadius
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.innerCircle, {
      width: innerCirWidth,
      height: innerCirHeight,
      borderRadius: innerCirRadius
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.imgBorder
  }, /*#__PURE__*/_react.default.createElement(_ProgressiveImage.default, {
    thumbnailSource: DefaultUserImg,
    source: docImage,
    style: styles.proPic,
    resizeMode: 'stretch'
  }))))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  proContainer: {
    width: windowWidth,
    height: 300,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerCircle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: _theme.default.secondryDarkColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: _theme.default.secondryLightColor
  },
  imgBorder: {
    width: 190,
    height: 190,
    borderRadius: 95,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(211,211,211,0.7)'
  },
  proPic: {
    alignSelf: 'center',
    width: 175,
    height: 175,
    borderRadius: 87.5
  }
});

var _default = AnimatedImage;
exports.default = _default;
//# sourceMappingURL=AnimatedImage.js.map