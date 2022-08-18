function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { StyleSheet, View, Dimensions } from 'react-native';
import React from "react";
const {
  width,
  height
} = Dimensions.get('window');

const Container = props => {
  return /*#__PURE__*/React.createElement(View, _extends({}, props, {
    style: [styles.container, props.style]
  }), props.children);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: height,
    width: width,
    zIndex: 2,
    paddingVertical: 20
  }
});
export default Container;
//# sourceMappingURL=Container.js.map