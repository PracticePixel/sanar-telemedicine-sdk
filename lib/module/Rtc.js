import React from "react";
import { StyleSheet, View } from 'react-native';
import { CONNECTION_STATUS } from "./Types";
import Ringer from "./components/Ringer";
import RtcView from "./RtcView";
import SanarContext from './common/SanarContext';

const Rtc = () => {
  const {
    ringing,
    status
  } = React.useContext(SanarContext);
  if (!ringing && status != CONNECTION_STATUS.CONNECTED) return null;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, ringing && /*#__PURE__*/React.createElement(Ringer, null), status == CONNECTION_STATUS.CONNECTED && /*#__PURE__*/React.createElement(RtcView, null));
};

export default Rtc;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute'
  }
});
//# sourceMappingURL=Rtc.js.map