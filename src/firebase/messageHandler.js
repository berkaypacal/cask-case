import notifee, {AndroidImportance} from '@notifee/react-native';
import {addNotification} from '../storage/notificationStore';
import {
  formatNotificationTitle,
  formatNotificationMessage,
} from '../utility/notification.helper';

export const handleIncomingMessage = async remoteMessage => {
  if (!remoteMessage) return;

  await addNotification(remoteMessage);

  const {title, body} = remoteMessage.notification || {};
  const {pn_type} = remoteMessage.data || {};

  await notifee.displayNotification({
    title: formatNotificationTitle(title),
    body: formatNotificationMessage(pn_type, body),
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
