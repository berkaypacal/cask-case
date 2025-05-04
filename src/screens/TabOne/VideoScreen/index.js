import React from 'react';
import LayoutComponent from '../../../components/base/LayoutComponent';
import {useNotificationContext} from '../../../context/NotificationContext';
import CustomVideoPlayer from '../../../components/common/VideoPlayer';

const VideoScreen = () => {
  const {selectedNotification} = useNotificationContext();
  const videoUrl = selectedNotification?.data?.youtube_url;

  return (
    <LayoutComponent title="Video Screen">
      <CustomVideoPlayer url={videoUrl} />
    </LayoutComponent>
  );
};

export default VideoScreen;
