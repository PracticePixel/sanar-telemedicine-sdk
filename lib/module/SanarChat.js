import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import Container from './components/Container';
import SanarTelemedicine from './SanarTelemedicine';

const SanarChat = props => {
  const [baseUrl, setBaseUrl] = useState('');
  const {
    notification
  } = props;
  useEffect(() => {
    if (props.enable) {
      if (SanarTelemedicine.session) {
        setBaseUrl(`${SanarTelemedicine.session.chatUrl}/${notification.roomName}/${notification.uid}?token=${SanarTelemedicine.session.token}`);
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

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(WebView, {
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

export default SanarChat;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    zIndex: 8 // flex: 1

  }
});
//# sourceMappingURL=SanarChat.js.map