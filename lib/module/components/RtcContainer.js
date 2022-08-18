function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Dimensions, TouchableOpacity, PanResponder, Animated, StyleSheet, I18nManager, Keyboard } from 'react-native';
import Controls from './Controls';
const {
  width,
  height
} = Dimensions.get('window');
var durationCount = 0;

const RtcContainer = props => {
  const pan = React.useRef(new Animated.ValueXY()).current;
  const [maximizeFrame, setMaximizeFrame] = React.useState(true);
  const [thumbnailMoved, setThumbnailMoved] = React.useState(false);
  var maxHeight = React.useRef(new Animated.Value(styles.primaryFrameDimensions.height)).current;
  var maxWidth = React.useRef(new Animated.Value(styles.primaryFrameDimensions.width)).current; // maximize or minimize video frame

  const toggleFrame = () => {
    Keyboard.dismiss();

    if (thumbnailMoved) {
      Animated.timing(pan, {
        toValue: {
          x: 0,
          y: 0
        },
        duration: 500,
        useNativeDriver: false
      }).start();
    }

    setMaximizeFrame(!maximizeFrame);
    var toHeight, toWidth;

    if (maximizeFrame) {
      toHeight = styles.thumbnailFrameDimensions.height;
      toWidth = styles.thumbnailFrameDimensions.width;
    } else {
      toHeight = styles.primaryFrameDimensions.height;
      toWidth = styles.primaryFrameDimensions.width;
    }

    Animated.timing(maxHeight, {
      toValue: toHeight,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(maxWidth, {
      toValue: toWidth,
      duration: 500,
      useNativeDriver: false
    }).start();
  }; // pan responder start


  const panResponder = React.useRef(PanResponder.create({
    // onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, _ref) => {
      let {
        dx,
        dy
      } = _ref;

      if (dx > 10 || dy > 10) {
        return true;
      }

      return false;
    },
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value
      });
    },
    onPanResponderMove: Animated.event([null, {
      dx: pan.x,
      dy: pan.y
    }], {
      useNativeDriver: false
    }),
    onPanResponderRelease: (e, gestureState) => {
      const stickToCorner = I18nManager.isRTL ? styles.thumbnailFrameDimensions.width - width : width - styles.thumbnailFrameDimensions.width;
      const thresholdWidth = width / 2;
      const moveXStatus = I18nManager.isRTL ? gestureState.moveX < thresholdWidth : gestureState.moveX > thresholdWidth;
      const isMoved = moveXStatus ? true : false;
      const moveX = isMoved ? stickToCorner : 0;
      setThumbnailMoved(isMoved);
      pan.flattenOffset();
      Animated.spring(pan, {
        toValue: {
          x: moveX,
          y: 0
        },
        useNativeDriver: false
      }).start();
    }
  })).current; // pan responder end

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Animated.View, _extends({
    style: [styles.container, styles.thumbnailFrame, {
      height: maxHeight,
      width: maxWidth
    }, {
      transform: [{
        translateX: pan.x
      }, {
        translateY: pan.y
      }]
    }]
  }, panResponder.panHandlers), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.container, {
      height: '100%',
      width: '100%'
    }, styles.thumbnailClick],
    onPress: toggleFrame
  }, props.children)), maximizeFrame && /*#__PURE__*/React.createElement(Controls, {
    toggleFrame: toggleFrame
  }));
};

export default RtcContainer;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.callBackground,
    position: 'absolute'
  },
  primaryFrame: {
    // backgroundColor: theme.colors.callBackground,
    borderRadius: 5
  },
  thumbnailFrame: {
    backgroundColor: "grey",
    borderRadius: 5
  },
  thumbnailFrameDimensions: {
    height: 250,
    width: 150
  },
  primaryFrameDimensions: {
    height: height + 100,
    width: width
  },
  thumbnailClick: {
    flex: 1,
    zIndex: 99999
  },
  // controls
  buttonHolder: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25
  },
  buttonText: {// color: '#fff',
  }
});
//# sourceMappingURL=RtcContainer.js.map