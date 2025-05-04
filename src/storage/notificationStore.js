import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from './storageKeys';

let listeners = [];

export const subscribeNotificationStore = listener => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
};

const notifyListeners = data => {
  listeners.forEach(fn => fn(data));
};

export const addNotification = async msg => {
  const json = await AsyncStorage.getItem(STORAGE_KEYS.NOTIFICATION_HISTORY);
  const current = json ? JSON.parse(json) : [];
  const updated = [msg, ...current].slice(0, 50);
  await AsyncStorage.setItem(
    STORAGE_KEYS.NOTIFICATION_HISTORY,
    JSON.stringify(updated),
  );
  notifyListeners(updated);
};

export const getNotifications = async () => {
  const json = await AsyncStorage.getItem(STORAGE_KEYS.NOTIFICATION_HISTORY);
  return json ? JSON.parse(json) : [];
};

export const clearNotifications = async () => {
  await AsyncStorage.removeItem(STORAGE_KEYS.NOTIFICATION_HISTORY);
  notifyListeners([]);
};
