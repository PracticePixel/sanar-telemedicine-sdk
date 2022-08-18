import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Animated, Dimensions } from 'react-native';
import AnimatedImage from '../common/AnimatedImage';
import DotLoader from '../common/DotLoader';
import SanarContext from '../common/SanarContext';
import colors from '../theme';
const {
  width,
  height
} = Dimensions.get('window');

const Connecting = props => {
  const {
    notification
  } = useContext(SanarContext);
  const {
    docProfile
  } = notification;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(AnimatedImage, {
    profileImage: docProfile
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.textContainer]
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.txtStyle
  }, "Connecting", /*#__PURE__*/React.createElement(DotLoader, {
    numberOfDots: 3,
    style: styles.dots
  }))));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: width,
    height: height
  },
  textContainer: {
    marginTop: 80,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStyle: {
    fontWeight: '700',
    fontSize: 25,
    color: colors.primaryColor
  },
  dots: {
    color: colors.primaryColor,
    fontSize: 50
  }
});
export default Connecting;
//# sourceMappingURL=Connecting.js.map