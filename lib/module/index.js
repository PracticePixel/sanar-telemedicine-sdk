import React from "react";
import { SANAR_EVENT_TYPE } from "./Types";
import SanarTelemedicine from "./SanarTelemedicine";
import Ringer from "./components/Ringer";
import SanarBooking from "./SanarBooking";
import SanarChat from "./SanarChat";
import SanarAppointments from "./SanarAppointments";
import SanarProvider from "./common/SanarProvider";
import Rtc from "./Rtc";

const SanarRTC = _ref => {
  let {
    enable
  } = _ref;
  return /*#__PURE__*/React.createElement(SanarProvider, {
    enable: enable
  }, /*#__PURE__*/React.createElement(Rtc, null));
};

export default SanarRTC;
export { SanarTelemedicine, SanarBooking, Ringer, SanarChat, SanarAppointments };
//# sourceMappingURL=index.js.map