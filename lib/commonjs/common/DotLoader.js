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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DotLoader extends _react.Component {
  constructor(props) {
    super(props);
    this._animation_state = {
      dot_opacities: this.initializeDots(),
      target_opacity: 1,
      should_animate: true
    };
  }

  initializeDots() {
    let opacities = [];

    for (let i = 0; i < this.props.numberOfDots; i++) {
      let dot = new _reactNative.Animated.Value(this.props.minOpacity);
      opacities.push(dot);
    }

    return opacities;
  }

  componentDidMount() {
    this.animate_dots.bind(this)(0);
  }

  componentWillUnmount() {
    this._animation_state.should_animate = false;
  }

  animate_dots(which_dot) {
    if (!this._animation_state.should_animate) return; // swap fade direction when we hit end of list

    if (which_dot >= this._animation_state.dot_opacities.length) {
      which_dot = 0;
      let min = this.props.minOpacity;
      this._animation_state.target_opacity = this._animation_state.target_opacity == min ? 1 : min;
    }

    let next_dot = which_dot + 1;

    _reactNative.Animated.timing(this._animation_state.dot_opacities[which_dot], {
      toValue: this._animation_state.target_opacity,
      duration: this.props.animationDelay,
      useNativeDriver: false
    }).start(this.animate_dots.bind(this, next_dot));
  }

  render() {
    let dots = this._animation_state.dot_opacities.map((o, i) => /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Text, {
      key: i,
      style: [this.props.style, {
        opacity: o
      }]
    }, "."));

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.container
    }, dots);
  }

}

exports.default = DotLoader;

_defineProperty(DotLoader, "propTypes", {
  numberOfDots: _propTypes.default.number,
  animationDelay: _propTypes.default.number,
  minOpacity: _propTypes.default.number,
  style: _reactNative.Text.propTypes.style
});

_defineProperty(DotLoader, "defaultProps", {
  numberOfDots: 3,
  animationDelay: 300,
  minOpacity: 0.2,
  style: {
    color: '#aaa',
    fontSize: 32
  }
});

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50
  }
});
//# sourceMappingURL=DotLoader.js.map