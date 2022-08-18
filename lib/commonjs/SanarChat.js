"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebview = _interopRequireDefault(require("react-native-webview"));

var _Container = _interopRequireDefault(require("./components/Container"));

var _SanarTelemedicine = _interopRequireDefault(require("./SanarTelemedicine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SanarChat = props => {
  const [baseUrl, setBaseUrl] = (0, _react.useState)('');
  const {
    notification
  } = props;
  (0, _react.useEffect)(() => {
    if (props.enable) {
      if (_SanarTelemedicine.default.session) {
        setBaseUrl(`${_SanarTelemedicine.default.session.chatUrl}/${notification.roomName}/${notification.uid}?token=${_SanarTelemedicine.default.session.token}`);
      }
    }
  });

  const onMessage = event => {
    console.log(baseUrl);

    if (!event.canGoBack && event.data && event.data.includes('home') || event.canGoBack && event.data && event.data.includes('home')) {
      setBaseUrl('');
      props.onEndFlow();
    }
  };

  if (!props.enable) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebview.default, {
    source: {
      uri: baseUrl
    },
    style: styles.container // incognito
    ,
    onMessage: event => onMessage(event.nativeEvent),
    injectedJavaScript: `
                        (function() {
                            function wrap(fn) {
                            return function wrapper() {
                                var res = fn.apply(this, arguments);
                                window.ReactNativeWebView.postMessage(window.location.href);
                                return res;
                            }
                            }
                            history.pushState = wrap(history.pushState);
                            history.replaceState = wrap(history.replaceState);
                            history.go = wrap(history.go);
                            window.addEventListener('popstate', function() {
                                window.ReactNativeWebView.postMessage('navigationStateChange');
                            });
                        })();
                        true;
                    `
  })));
};

var _default = SanarChat;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    zIndex: 8 // flex: 1

  }
});
//# sourceMappingURL=SanarChat.js.map