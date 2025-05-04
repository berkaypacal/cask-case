import {useEffect, useState} from 'react';
import {AppState} from 'react-native';
import {
  getNotifications,
  subscribeNotificationStore,
} from '../storage/notificationStore';

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
