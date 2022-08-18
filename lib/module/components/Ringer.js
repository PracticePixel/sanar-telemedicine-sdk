function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import SanarContext from '../common/SanarContext';
import AnimatedImage from '../common/AnimatedImage';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../common/SanarSVG';
import colors from '../theme';

const Icon = props => /*#__PURE__*/React.createElement(SvgIcon, _extends({}, props, {
  svgs: svgs
}));

const {
  width,
  height
} = Dimensions.get('window');

const Ringer = () => {
  const {
    notification,
    acceptCall,
    disconnectCall
  } = useContext(SanarContext);
  const {
    docName,
    type,
    docProfile
  } = notification;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(AnimatedImage, {
    profileImage: docProfile
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.textContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.doctorName
  }, docName || ''), /*#__PURE__*/React.createElement(Text, {
    style: styles.callTypeText
  }, type || '')), /*#__PURE__*/React.createElement(View, {
    style: styles.btnContainer
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => disconnectCall(),
    style: styles.disconnectBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "callDisconnectSv",
    height: 28,
    width: 28
  })), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => acceptCall(),
    style: styles.acceptBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "callAccept",
    height: 20,
    width: 20
  }))));
};

export default Ringer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: width,
    height: height
  },
  textContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  btnContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '12%',
    position: 'absolute',
    bottom: 60,
    width: '100%'
  },
  disconnectBtn: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  acceptBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1abc9c',
    width: 80,
    height: 80,
    borderRadius: 100
  },
  doctorName: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.textDarkColor
  },
  callTypeText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textGrayColor,
    marginTop: 10
  }
});
//# sourceMappingURL=Ringer.js.map