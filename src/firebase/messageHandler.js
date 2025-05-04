import notifee, {AndroidImportance} from '@notifee/react-native';
import {addNotification} from '../storage/notificationStore';

export const handleIncomingMessage = async remoteMessage => {
  if (!remoteMessage) {
    return;
  }
  await addNotification(remoteMessage);
  await notifee.displayNotification({
    title: remoteMessage.notification?.title || 'Bildirim',
    body: remoteMessage.notification?.body || '',
    android: {
      channelId: 'default',
      importance: AndroidImportance.HIGH,
      pressAction: {
        id: 'default',
      },
    },
    data: remoteMessage.data || {},
  });
};
