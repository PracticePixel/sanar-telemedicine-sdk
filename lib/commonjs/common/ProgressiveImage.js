"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DefaultUserImg = require('../Images/profile.png');

class ProgressiveImage extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "thumbnailAnimated", new _reactNative.Animated.Value(0));

    _defineProperty(this, "imageAnimated", new _reactNative.Animated.Value(0));

    _defineProperty(this, "handleThumbnailLoad", () => {
      _reactNative.Animated.timing(this.thumbnailAnimated, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    });

    _defineProperty(this, "onImageLoad", () => {
      _reactNative.Animated.timing(this.imageAnimated, {
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
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.container, containerStyle]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Image, _extends({}, props, {
      source: thumbnailSource,
      style: [{
        opacity: this.thumbnailAnimated
      }, style, styleThumb],
      onLoad: this.handleThumbnailLoad,
      blurRadius: 1,
      resizeMode: resizeMode
    })), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Image, _extends({}, props, {
      source: source,
      style: [styles.imageOverlay, {
        opacity: this.imageAnimated
      }, style],
      onLoad: this.onImageLoad,
      resizeMode: resizeMode
    })));
  }

}

exports.default = ProgressiveImage;

const styles = _reactNative.StyleSheet.create({
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
  thumbnailSource: _propTypes.default.any,
  style: _propTypes.default.object,
  source: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.any]),
  containerStyle: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.array])
}; // Specifies the default values for props:

ProgressiveImage.defaultProps = {
  thumbnailSource: DefaultUserImg,
  source: DefaultUserImg
};
//# sourceMappingURL=ProgressiveImage.js.map