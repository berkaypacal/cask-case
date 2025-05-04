import React from 'react';
import {View} from 'react-native';
import LayoutComponent from '../../../components/base/LayoutComponent';
import {useNotificationContext} from '../../../context/NotificationContext';
import styles from './styles';
import CustomImage from '../../../components/common/CustomImage';

const ImageScreen = () => {
  const {selectedNotification} = useNotificationContext();
  const imgUrl = selectedNotification?.data?.img_url;

  return (
    <LayoutComponent title="Image Notification">
      <View style={styles.container}>
        <CustomImage url={imgUrl} />
      </View>
    </LayoutComponent>
  );
};

export default ImageScreen;
