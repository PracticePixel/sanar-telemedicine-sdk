import React, { useContext } from 'react';
import { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'sanar-rtc';
import SanarContext from '../common/SanarContext';

const VideoFrames = props => {
  const {
    isLocal
  } = props;
  const {
    notification,
    _peerIds
  } = useContext(SanarContext);

  const LocalFrame = () => {
    return /*#__PURE__*/React.createElement(RtcLocalView.SurfaceView, {
      style: {
        flex: 1
      },
      zOrderOnTop: false,
      channelId: notification.roomName,
      renderMode: VideoRenderMode.Adaptive
    });
  };

  const RemoteFrame = () => {
    return _peerIds.map((peerId, i) => {
      return /*#__PURE__*/React.createElement(RtcRemoteView.SurfaceView, {
        key: i,
        style: {
          flex: 1
        },
        uid: peerId,
        channelId: notification.roomName,
        renderMode: VideoRenderMode.Adaptive,
        zOrderMediaOverlay: false
      });
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, isLocal ? /*#__PURE__*/React.createElement(LocalFrame, null) : /*#__PURE__*/React.createElement(RemoteFrame, null));
};

export default VideoFrames;
//# sourceMappingURL=VideoFrames.js.map