import {useEffect} from 'react';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {getApp} from '@react-native-firebase/app';
import {getMessaging, onMessage} from '@react-native-firebase/messaging';
import {handleIncomingMessage} from '../firebase/messageHandler';
import {navigateToNotificationTarget} from '../utility/navigation.helper';

export const useNotificationHandler = hasPermission => {
  useEffect(() => {
    if (!hasPermission) return;

    const messaging = getMessaging(getApp());

    const unsubscribeMessage = onMessage(messaging, handleIncomingMessage);

    notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    const unsubscribeNotifee = notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.PRESS) {
        const notification = detail.notification;

        const pn_type = notification?.data?.pn_type;
        if (pn_type) {
          console.log(notification);
          navigateToNotificationTarget(
            pn_type,
            pn_type == 1 ? detail : detail.notification,
          );
        }
      }
    });

    return () => {
      unsubscribeMessage();
      unsubscribeNotifee();
    };
  }, [hasPermission]);
};
