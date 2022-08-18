"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Types = require("../Types");

var _constants = require("../common/constants");

var _reactNativeAgora = require("react-native-agora");

var _SanarTelemedicine = _interopRequireDefault(require("../SanarTelemedicine"));

var _SanarContext = _interopRequireDefault(require("./SanarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SanarProvider = _ref => {
  let {
    children,
    enable
  } = _ref;
  const initialState = {
    notification: null,
    ringing: false,
    status: _Types.CONNECTION_STATUS.DISCONNECTED
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case _constants.TELECALL:
        return { ...state,
          ringing: action.value
        };

      case _constants.MESSAGE:
        return { ...state,
          notification: action.value
        };

      case _constants.ACCEPT_CALL:
        return { ...state,
          status: action.value
        };

      case _constants.END_CALL:
        return { ...state,
          status: action.value
        };

      default:
        return initialState;
    }
  };

  const [state, dispatch] = (0, _react.useReducer)(reducer, initialState);
  (0, _react.useEffect)(() => {
    console.log('Telemedicine init');

    if (enable && store.status == _Types.CONNECTION_STATUS.DISCONNECTED) {
      if (_SanarTelemedicine.default.session) {
        _SanarTelemedicine.default.eventListner.on(_Types.SANAR_EVENT_TYPE.Connect, () => {
          console.log('Connected with Sanar');
        });

        _SanarTelemedicine.default.eventListner.on(_Types.SANAR_EVENT_TYPE.Disconnect, () => {
          console.log('disconnected');
        });

        _SanarTelemedicine.default.eventListner.on(_Types.SANAR_EVENT_TYPE.Telecall, e => {
          console.log('telecall ', e);
          dispatch({
            type: _constants.MESSAGE,
            value: e
          });
          dispatch({
            type: _constants.TELECALL,
            value: true
          });
        }); // SanarTelemedicine.eventListner.on(SANAR_EVENT_TYPE.Message, (e) => {
        //     dispatch({ type: MESSAGE, value: e });
        // });


        _SanarTelemedicine.default.eventListner.on(_Types.SANAR_EVENT_TYPE.ConnectError, () => {
          console.log('Connect error');
          dispatch({
            type: _constants.END_CALL,
            value: _Types.CONNECTION_STATUS.DISCONNECTED
          });

          store._engineRef.leaveChannel();
        });

        _SanarTelemedicine.default.eventListner.on('CALL_REJECTED', e => {
          store.resetStore();
          dispatch({
            type: ""
          });
          console.log('call disconnected');
        });
      }
    } else {
      dispatch({
        type: ""
      });
      store.resetStore();

      _SanarTelemedicine.default.Disconnect();

      console.log(`Connection validation warning`);
    }
  }, [enable]);

  const onDecline = () => {
    var _state$notification, _state$notification2;

    _SanarTelemedicine.default.eventListner.emit(_constants.REJECT_CALL, JSON.stringify({
      did: _SanarTelemedicine.default.info.did,
      headerToken: decodeURIComponent(_SanarTelemedicine.default.session.token),
      dsid: (_state$notification = state.notification) === null || _state$notification === void 0 ? void 0 : _state$notification.sid,
      roomName: (_state$notification2 = state.notification) === null || _state$notification2 === void 0 ? void 0 : _state$notification2.roomName
    })); // dispatch({ type: MESSAGE, value: null });


    dispatch({
      type: _constants.TELECALL,
      value: false
    });
    dispatch({
      type: _constants.END_CALL,
      value: _Types.CONNECTION_STATUS.DISCONNECTED
    });
  };

  const onAccept = () => {
    var _state$notification3, _state$notification4;

    dispatch({
      type: _constants.TELECALL,
      value: false
    });
    dispatch({
      type: _constants.ACCEPT_CALL,
      value: _Types.CONNECTION_STATUS.CONNECTED
    });

    _SanarTelemedicine.default.eventListner.emit(_constants.ACCEPT_CALL, JSON.stringify({
      did: _SanarTelemedicine.default.info.did,
      headerToken: decodeURIComponent(_SanarTelemedicine.default.session.token),
      dsid: (_state$notification3 = state.notification) === null || _state$notification3 === void 0 ? void 0 : _state$notification3.sid,
      roomName: (_state$notification4 = state.notification) === null || _state$notification4 === void 0 ? void 0 : _state$notification4.roomName
    }));
  };

  const onEnd = duration => {
    var _state$notification5, _state$notification6;

    _SanarTelemedicine.default.eventListner.emit(_constants.REJECT_CALL, JSON.stringify({
      did: _SanarTelemedicine.default.info.did,
      headerToken: decodeURIComponent(_SanarTelemedicine.default.session.token),
      dsid: (_state$notification5 = state.notification) === null || _state$notification5 === void 0 ? void 0 : _state$notification5.sid,
      roomName: (_state$notification6 = state.notification) === null || _state$notification6 === void 0 ? void 0 : _state$notification6.roomName,
      duration: duration
    }));

    dispatch({
      type: _constants.END_CALL,
      value: _Types.CONNECTION_STATUS.DISCONNECTED
    });

    store._engineRef.leaveChannel();
  };

  const _toggleAudio = async action => {
    await store._engineRef.setEnableSpeakerphone(action);
  };

  const _toggleVideo = action => {
    if (!action) {
      store._engineRef.enableLocalVideo(false);

      store._engineRef.stopPreview();
    } else {
      store._engineRef.enableLocalVideo(true);

      store._engineRef.startPreview();
    }
  };

  const _toggleMute = async action => {
    if (!action) {
      await store._engineRef.muteLocalAudioStream(true);
    } else {
      await store._engineRef.muteLocalAudioStream(false);
    }
  };

  const _toggleCamera = action => {
    store._engineRef.switchCamera();
  };

  const _toggleWhiteBg = async action => {
    let source = new _reactNativeAgora.VirtualBackgroundSource({
      backgroundSourceType: _reactNativeAgora.VirtualBackgroundSourceType.Color,
      color: new _reactNativeAgora.Color(1, 1, 1)
    });

    if (!action) {
      store._engineRef.enableVirtualBackground(true, source);
    } else {
      store._engineRef.enableVirtualBackground(false, source);
    }
  };

  const _toggleBlurBg = action => {
    let source = new _reactNativeAgora.VirtualBackgroundSource({
      backgroundSourceType: _reactNativeAgora.VirtualBackgroundSourceType.Blur,
      blur_degree: _reactNativeAgora.VirtualBackgroundBlurDegree.Medium
    });

    if (!action) {
      store._engineRef.enableVirtualBackground(true, source);
    } else {
      store._engineRef.enableVirtualBackground(false, source);
    }
  };

  const [_engine, set_Engine] = (0, _react.useState)(null);
  const [_peerIds, _setPeerIds] = (0, _react.useState)([]);
  const [_intialFrame, set_IntialFrame] = (0, _react.useState)(false);
  const [_isPaused, set_IsPaused] = (0, _react.useState)(false);
  const [_openChat, set_OpenChat] = (0, _react.useState)(false);
  const store = {
    notification: state.notification,
    ringing: state.ringing,
    status: state.status,
    isChatEnabled: _openChat,
    newMessage: false,
    brandLogo: true,
    //:- Engine properties
    _engineRef: _engine,
    _peerIds: _peerIds,
    intialFrame: _intialFrame,
    isPaused: _isPaused,
    //:- Action
    acceptCall: () => {
      onAccept();
    },
    disconnectCall: () => {
      onDecline();
    },
    endCall: duration => {
      onEnd(duration);
    },
    setEngineRef: ref => {
      set_Engine(ref);
    },
    setPeerIds: data => {
      _setPeerIds(data);
    },
    switchFrame: () => {
      set_IntialFrame(!_intialFrame);
    },
    setVideoPaused: state => {
      set_IsPaused(state);
    },
    onClickChat: () => {
      set_OpenChat(true);
    },
    resetStore: () => {
      set_OpenChat(false);

      _setPeerIds([]);

      set_IntialFrame(false);
      set_IsPaused(false);
    },
    onClickControl: (type, value) => {
      console.log(type, value);

      switch (type) {
        case "CAMERA":
          _toggleCamera(value);

          break;

        case "AUDIO":
          _toggleAudio(value);

          break;

        case "MUTE":
          _toggleMute(value);

          break;

        case "VIDEO":
          _toggleVideo(value);

          break;

        case "WHITE_BG":
          _toggleWhiteBg(value);

          break;

        case "BLUR_BG":
          _toggleBlurBg(value);

          break;

        default:
          break;
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_SanarContext.default.Provider, {
    value: store
  }, children);
};

var _default = SanarProvider;
exports.default = _default;
//# sourceMappingURL=SanarProvider.js.map