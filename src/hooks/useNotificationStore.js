import {useEffect, useState} from 'react';
import {AppState} from 'react-native';
import {
  getNotifications,
  subscribeNotificationStore,
} from '../storage/notificationStore';

/**
 * Custom hook to manage and retrieve notifications from the notification store in a React Native application.
 *
 * @returns {Array} An array of notification objects.
 */
export const useNotificationStore = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };

    const unsub = subscribeNotificationStore(setNotifications);
    load();

    const appListener = AppState.addEventListener('change', state => {
      if (state === 'active') load();
    });

    return () => {
      unsub();
      appListener.remove();
    };
  }, []);

  return notifications;
};
