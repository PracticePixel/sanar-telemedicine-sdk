"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _console = require("console");

var _socket = _interopRequireDefault(require("socket.io-client"));

var _utils = require("./utils");

var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
class SanarTelemedicine {
  async Connect(cid, info) {
    try {
      let did = await _reactNativeDeviceInfo.default.getUniqueId();
      const {
        status,
        data,
        message
      } = await (0, _utils.getInfo)(cid, info);

      if (status == 1000) {
        this.eventListner = (0, _socket.default)(data.messagingUrl, {
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

var _default = new SanarTelemedicine();

exports.default = _default;
//# sourceMappingURL=SanarTelemedicine.js.map