"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvgIcon = _interopRequireDefault(require("react-native-svg-icon"));

var _SanarSVG = _interopRequireDefault(require("../common/SanarSVG"));

var _VideoFrames = _interopRequireDefault(require("./VideoFrames"));

var _moment = _interopRequireDefault(require("moment"));

var _reactNativeSvg = require("react-native-svg");

var _theme = _interopRequireDefault(require("../theme"));

var _viewportUnits = require("../viewport-units");

var _SanarContext = _interopRequireDefault(require("../common/SanarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Icon = props => /*#__PURE__*/_react.default.createElement(_reactNativeSvgIcon.default, _extends({}, props, {
  svgs: _SanarSVG.default
}));

const DefaultUserImg = require('../Images/profile.png');

const width = _reactNative.Dimensions.get('window').width;

const height = _reactNative.Dimensions.get('window').height;

let modelHeight = new _reactNative.Animated.Value(0);
var backgroundTime = null;

const Controls = props => {
  const {
    toggleFrame
  } = props;
  const {
    notification,
    newMessage,
    endCall,
    brandLogo,
    intialFrame,
    isPaused,
    switchFrame,
    onClickControl,
    onClickChat
  } = (0, _react.useContext)(_SanarContext.default);
  const {
    docProfile,
    docName
  } = notification;
  const [duration, setDuration] = (0, _react.useState)((0, _moment.default)().hour(0).minute(0).second(0).format('H : mm : ss'));
  const [timer, setTimer] = (0, _react.useState)(0);
  const [isModelOpen, setIsModelOpen] = (0, _react.useState)(false);
  const [isAudio, setIsAudio] = (0, _react.useState)(false);
  const [isCamera, setIsCamera] = (0, _react.useState)(false);
  const [isWhite, setIsWhite] = (0, _react.useState)(false);
  const [isBlur, setIsBlur] = (0, _react.useState)(false);
  const [isMute, setIsMute] = (0, _react.useState)(false);
  const [isVideo, setIsVideo] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const subscription = _reactNative.AppState.addEventListener("change", nextAppState => {
      if (nextAppState == 'background') {
        backgroundTime = (0, _moment.default)();
      } else {
        var activeTime = (0, _moment.default)();
        var newData = activeTime.diff(backgroundTime, 'seconds');

        if (backgroundTime !== null) {
          getTime(newData);
          backgroundTime = null;
        }
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);
  (0, _react.useEffect)(() => {
    const interval = setInterval(() => {
      getTime(1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const getTime = val => {
    setTimer(prev => prev + val);
    var callDuration = (0, _moment.default)().hour(0).minute(0).second(timer).format('H : mm : ss');
    setDuration(callDuration);
  };

  const updateModel = () => {
    setIsModelOpen(!isModelOpen);

    if (isModelOpen) {
      _reactNative.Animated.timing(modelHeight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start();
    } else {
      _reactNative.Animated.timing(modelHeight, {
        toValue: 300,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  };

  const onClickChatIcon = () => {
    toggleFrame();
    onClickChat();
  };

  const videoFrames = () => {
    let doctorImg = docProfile ? {
      uri: docProfile
    } : DefaultUserImg;
    var userImage = docProfile ? {
      uri: docProfile
    } : DefaultUserImg;
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: switchFrame,
      style: styles.videoFrameSwitch
    }, !intialFrame ? isVideo ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: doctorImg,
      style: styles.imageStyle
    }) : /*#__PURE__*/_react.default.createElement(_VideoFrames.default, {
      isLocal: !intialFrame
    }) : isPaused ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: userImage,
      style: styles.imageStyle
    }) : /*#__PURE__*/_react.default.createElement(_VideoFrames.default, {
      isLocal: !intialFrame
    }));
  };

  const controls = (type, value) => {
    switch (type) {
      case "MUTE":
        setIsMute(!isMute);
        onClickControl(type, isMute);
        break;

      case "VIDEO":
        setIsVideo(!isVideo);
        onClickControl(type, isVideo);
        break;

      case "AUDIO":
        setIsAudio(!isAudio);
        onClickControl(type, isAudio);
        break;

      case "CAMERA":
        setIsCamera(!isCamera);
        onClickControl(type, isCamera);
        break;

      case "WHITE_BG":
        setIsWhite(!isWhite);
        onClickControl(type, isWhite);
        break;

      case "BLUR_BG":
        setIsBlur(!isBlur);
        onClickControl(type, isBlur);
        break;

      default:
        break;
    }
  };

  const sideMenuControls = () => {
    const animatedStyle = {
      height: modelHeight,
      opacity: modelHeight.interpolate({
        inputRange: [0, 100, 150, 300],
        outputRange: [0, 0, 0, 1]
      })
    };
    return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
      style: [styles.modelContainer, animatedStyle, {
        height: modelHeight,
        backgroundColor: 'rgba(0,0,0, 0.1)',
        borderRadius: 20,
        alignItems: 'center'
      }]
    }, isModelOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => controls('WHITE_BG', isWhite),
      style: styles.frameBorder
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(Icon, {
      name: "backgroundWhite",
      height: "25",
      width: "25"
    }))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => controls('BLUR_BG', isBlur),
      style: styles.frameBorder
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(Icon, {
      name: "backgroundBlur",
      height: "25",
      width: "25"
    }))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => controls('CAMERA', isCamera),
      style: styles.frameBorder
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, isCamera ? /*#__PURE__*/_react.default.createElement(Icon, {
      name: "cameraWithFlipIcon"
    }) : /*#__PURE__*/_react.default.createElement(Icon, {
      name: "cameraWithoutFlipIcon"
    }))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => controls('AUDIO', isAudio),
      style: styles.frameBorder
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, isAudio ? /*#__PURE__*/_react.default.createElement(Icon, {
      name: "speakerDisableIcon"
    }) : /*#__PURE__*/_react.default.createElement(Icon, {
      name: "speakerEnableIcon"
    })))));
  };

  const bottomMenuControls = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.btnContainer
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.btnFirstRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.btnRowRight
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => controls('MUTE', isMute),
      style: styles.microPhoneStyle
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.backgroundChange
    }), !isMute ? /*#__PURE__*/_react.default.createElement(Icon, {
      name: "newMicroPhone",
      height: 20,
      width: 20
    }) : /*#__PURE__*/_react.default.createElement(Icon, {
      name: "mutedMicroPhone",
      height: 20,
      width: 20
    })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => controls('VIDEO', isVideo),
      style: styles.normalBtn
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.backgroundChange
    }), isVideo ? /*#__PURE__*/_react.default.createElement(Icon, {
      name: "videoDisableNew",
      height: 20,
      width: 20
    }) : /*#__PURE__*/_react.default.createElement(Icon, {
      name: "cameraIconNew",
      height: 20,
      width: 20
    }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.btnRowLeft
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => onClickChatIcon(),
      style: styles.chatBtn
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.backgroundChange
    }), /*#__PURE__*/_react.default.createElement(Icon, {
      name: "newVideoChat",
      height: "18",
      width: "23",
      fill: "#FFF"
    }), newMessage && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        backgroundColor: 'red',
        width: 40,
        height: 30,
        position: 'absolute',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        top: -18,
        right: -18
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: 'white'
      }
    }, "new"))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: styles.normalBtn,
      onPress: updateModel
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.backgroundChange
    }), isModelOpen ? /*#__PURE__*/_react.default.createElement(Icon, {
      name: "cancellNew",
      height: 14,
      width: 14,
      fill: "#FFF"
    }) : /*#__PURE__*/_react.default.createElement(Icon, {
      name: "moreInVideo",
      height: 20,
      width: 20
    })))));
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, brandLogo && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.logoContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      bottom: 0,
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    name: "sanrLogoSvgVideoCall",
    height: 130,
    width: 130
  }))), videoFrames(), isPaused && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.pauseTextStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.pausedText
  }, 'Video Paused')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: "absolute",
      bottom: 120,
      left: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: "absolute",
      width: "120%",
      height: "120%",
      backgroundColor: "white",
      opacity: 0.1,
      marginTop: '-5%',
      marginLeft: '-7%',
      borderRadius: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      color: 'black',
      fontWeight: '700',
      fontSize: 16
    }
  }, docName), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.durationTxt
  }, duration)), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => endCall(duration),
    style: [styles.disconnectBtn]
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    name: "callDisconnectSv",
    height: 25,
    width: 25
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.backGroundSvg
  }, /*#__PURE__*/_react.default.createElement(BackGroundSvg, {
    color: _theme.default.primaryColor
  })), sideMenuControls(), bottomMenuControls());
};

const BackGroundSvg = color => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
    viewBox: "0 0 375 80",
    height: 150,
    width: width
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.G, {
    id: "Page-1",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.G, {
    id: "Patient-view-Copy-2",
    transform: "translate(0.000000, -682.000000)",
    fill: color.color
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.G, {
    id: "Group",
    transform: "translate(0.000000, 674.292312)"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M0,137.707688 L375,137.707688 L375,0.632737058 L375,7.70768807 C375,18.7533831 366.045695,27.7076881 355,27.7076881 L251.97575,27.7076881 C239.471794,27.7087876 228.279787,35.4652685 223.888413,47.172734 C217.75485,63.5293701 205.536218,71.7076881 187.232515,71.7076881 C168.705898,71.7076881 156.092977,63.3289549 149.393753,46.5714886 C144.839536,35.1792905 133.807492,27.7082653 121.538707,27.7076881 L20,27.7076881 C8.954305,27.7076881 -9.30543353e-15,18.7533831 0,7.70768807 L0,0 L0,0 L0,137.707688 Z",
    id: "bg"
  })))));
}; // const Timer = () => {
// const [duration, setDuration] = useState(moment().hour(0).minute(0).second(0).format('H : mm : ss'));
// const [timer, setTimer] = useState(0);
// React.useEffect(() => {
//     const subscription = AppState.addEventListener("change", nextAppState => {
//         if (nextAppState == 'background') {
//             backgroundTime = moment()
//         } else {
//             var activeTime = moment()
//             var newData = activeTime.diff(backgroundTime, 'seconds')
//             if (backgroundTime !== null) {
//                 getTime(newData)
//                 backgroundTime = null
//             }
//         }
//     });
//     return () => {
//         subscription.remove();
//     };
// }, []);
// React.useEffect(() => {
//     const interval = setInterval(() => {
//         getTime(1)
//     }, 1000);
//     return () => clearInterval(interval);
// }, [timer]);
// const getTime = (val) => {
//     setTimer((prev) => prev + val)
//     var callDuration = moment().hour(0).minute(0).second(timer).format('H : mm : ss')
//     setDuration(callDuration)
// }
// return (<Text style={styles.durationTxt}>{duration}</Text>)
// }


var _default = Controls;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: width,
    height: height
  },
  btnContainer: {
    position: 'absolute',
    bottom: 1 * _viewportUnits.vw,
    zIndex: 999,
    backgroundColor: 'transparent'
  },
  btnFirstRow: {
    flexDirection: 'row',
    zIndex: 999,
    marginBottom: 30,
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  },
  btnRowRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    right: 30,
    alignItems: 'center'
  },
  btnRowLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: 30
  },
  microPhoneStyle: {
    width: 12 * _viewportUnits.vw,
    height: 12 * _viewportUnits.vw,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: _theme.default.primaryColor,
    justifyContent: 'center',
    padding: 5,
    marginRight: 10
  },
  normalBtn: {
    width: 12 * _viewportUnits.vw,
    height: 12 * _viewportUnits.vw,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: _theme.default.primaryColor,
    justifyContent: 'center',
    padding: 5
  },
  chatBtn: {
    width: 12 * _viewportUnits.vw,
    height: 12 * _viewportUnits.vw,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: _theme.default.primaryColor,
    justifyContent: 'center',
    padding: 5,
    marginRight: 10
  },
  backGroundSvg: {
    position: 'absolute',
    bottom: 0,
    zIndex: -9990,
    backgroundColor: 'transparent'
  },
  logoContainer: {
    width: width,
    height: 100,
    position: 'absolute',
    top: _reactNative.Platform.OS === 'ios' ? 30 : -20,
    left: 20
  },
  disconnectBtn: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    zIndex: 999,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 65,
    position: 'absolute'
  },
  imageStyle: {
    width: 120,
    height: 160,
    alignSelf: 'center',
    alignItems: 'center'
  },
  frameBorder: {
    width: 48,
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 0,
    zIndex: 999999999,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  modelContainer: {
    width: 60,
    position: 'absolute',
    bottom: 100,
    right: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: 'hidden',
    zIndex: 999999999
  },
  pausedText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pauseTextStyle: {
    top: height / 2 - 25,
    left: width / 2 - 75,
    width: 150,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoFrameSwitch: {
    width: 120,
    height: 160,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: _reactNative.Platform.OS == 'android' ? 0 : 10,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 999099999,
    right: 20,
    top: 50
  },
  backgroundChange: {
    width: 12 * _viewportUnits.vw,
    height: 12 * _viewportUnits.vw,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    opacity: 0.1,
    justifyContent: 'center',
    padding: 5,
    position: 'absolute'
  },
  durationTxt: {
    color: 'black',
    fontWeight: '500',
    fontSize: 13
  }
});

exports.styles = styles;
//# sourceMappingURL=Controls.js.map