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
        const pn_type = detail.notification?.data?.pn_type;
        if (pn_type) {
          navigateToNotificationTarget(pn_type);
        }
      }
    });

    return () => {
      unsubscribeMessage();
      unsubscribeNotifee();
    };
  }, [hasPermission]);
};
