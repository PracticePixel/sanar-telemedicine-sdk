"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _RtcContainer = _interopRequireDefault(require("./components/RtcContainer"));

var _reactNativeAgora = _interopRequireDefault(require("react-native-agora"));

var _VideoFrames = _interopRequireDefault(require("./components/VideoFrames"));

var _SanarContext = _interopRequireDefault(require("./common/SanarContext"));

var _Connecting = _interopRequireDefault(require("./components/Connecting"));

var _SanarChat = _interopRequireDefault(require("./SanarChat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RtcView extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      peerIds: [],
      joined: false,
      connecting: true
    };
  }

  componentWillUnmount() {
    const {
      _engineRef
    } = this.context;

    _engineRef.destroy();
  }

  async componentDidMount() {
    const {
      notification,
      setPeerIds,
      setEngineRef,
      setVideoPaused
    } = this.context;

    const _engine = await _reactNativeAgora.default.create(notification.providerId);

    setEngineRef(_engine); //:- Setting engine ref to store

    _engine.enableVideo();

    _engine.addListener('Warning', warn => {
      console.log('Warning', warn);
    });

    _engine.addListener('Error', err => {
      console.log('Error', err);
    });

    _engine.addListener('RemoteVideoStateChanged', (uid, state, reason, elapsed) => {
      console.log('RemoteVideoStats', uid, state, reason, elapsed);

      if (reason == 5) {
        setVideoPaused(true);
      } else if (reason == 6) {
        setVideoPaused(false);
      }
    });

    _engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed); // If new user

      if (this.state.peerIds.indexOf(uid) === -1) {
        this.setState({
          peerIds: [...this.state.peerIds, uid]
        });
        setPeerIds(this.state.peerIds);
      }

      this.setState({
        connecting: false
      });
    });

    _engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      this.setState({
        peerIds: this.state.peerIds.filter(id => id !== uid)
      });
      setPeerIds(this.state.peerIds);
    });

    _engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      this.setState({
        joined: true
      });
    });

    setTimeout(() => {
      _engine === null || _engine === void 0 ? void 0 : _engine.joinChannel(notification.token, notification.roomName, null, 0);
    }, 1000);
  }

  render() {
    const {
      intialFrame,
      isChatEnabled,
      notification
    } = this.context;
    const {
      joined,
      connecting
    } = this.state;

    if (joined) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: {
          position: 'absolute',
          zIndex: 99999
        }
      }, connecting ? /*#__PURE__*/_react.default.createElement(_Connecting.default, null) : /*#__PURE__*/_react.default.createElement(_RtcContainer.default, null, /*#__PURE__*/_react.default.createElement(_VideoFrames.default, {
        isLocal: intialFrame
      }))), /*#__PURE__*/_react.default.createElement(_SanarChat.default, {
        empId: 'uid',
        appointmentId: 'apnt_id',
        notification: notification,
        enable: isChatEnabled,
        onEndFlow: () => {}
      }));
    } else {
      return null;
    }
  }

}

exports.default = RtcView;

_defineProperty(RtcView, "contextType", _SanarContext.default);
//# sourceMappingURL=RtcView.js.map