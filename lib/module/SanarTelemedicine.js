// @ts-ignore
import { info } from 'console';
import io from 'socket.io-client';
import { getInfo } from './utils';
import DeviceInfo from 'react-native-device-info';

class SanarTelemedicine {
  async Connect(cid, info) {
    try {
      let did = await DeviceInfo.getUniqueId();
      const {
        status,
        data,
        message
      } = await getInfo(cid, info);

      if (status == 1000) {
        this.eventListner = io(data.messagingUrl, {
          query: `uid=${data.uid}&did=${did}`
        });
        this.session = data;
        this.info = info;
        return {
          message: message,
          status: true
        };
      } else {
        return {
          message: message,
          status: false
        };
      }

      ;
    } catch (error) {
      throw error;
    }
  }

  Disconnect() {
    if (this.eventListner) {
      this.eventListner.disconnect();
      console.log("Disconnected with Sanar");
    }
  }

}

;
export default new SanarTelemedicine();
//# sourceMappingURL=SanarTelemedicine.js.map