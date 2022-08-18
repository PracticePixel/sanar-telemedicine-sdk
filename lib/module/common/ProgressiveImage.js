function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, Dimensions, StyleSheet, Linking, TouchableOpacity, ScrollView, Image, ActivityIndicator, PanResponder, Animated } from 'react-native';

const DefaultUserImg = require('../Images/profile.png');

import PropTypes from 'prop-types';
export default class ProgressiveImage extends React.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "thumbnailAnimated", new Animated.Value(0));

    _defineProperty(this, "imageAnimated", new Animated.Value(0));

    _defineProperty(this, "handleThumbnailLoad", () => {
      Animated.timing(this.thumbnailAnimated, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    });

    _defineProperty(this, "onImageLoad", () => {
      Animated.timing(this.imageAnimated, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    });
  }

  render() {
    const {
      thumbnailSource,
      source,
      style,
      containerStyle,
      resizeMode,
      styleThumb,
      ...props
    } = this.props;
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.container, containerStyle]
    }, /*#__PURE__*/React.createElement(Animated.Image, _extends({}, props, {
      source: thumbnailSource,
      style: [{
        opacity: this.thumbnailAnimated
      }, style, styleThumb],
      onLoad: this.handleThumbnailLoad,
      blurRadius: 1,
      resizeMode: resizeMode
    })), /*#__PURE__*/React.createElement(Animated.Image, _extends({}, props, {
      source: source,
      style: [styles.imageOverlay, {
        opacity: this.imageAnimated
      }, style],
      onLoad: this.onImageLoad,
      resizeMode: resizeMode
    })));
  }

}
const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {// backgroundColor: 'transparent',
  }
});
ProgressiveImage.propTypes = {
  thumbnailSource: PropTypes.any,
  style: PropTypes.object,
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  containerStyle: PropTypes.oneOfType([PropTypes.any, PropTypes.array])
}; // Specifies the default values for props:

ProgressiveImage.defaultProps = {
  thumbnailSource: DefaultUserImg,
  source: DefaultUserImg
};
//# sourceMappingURL=ProgressiveImage.js.map