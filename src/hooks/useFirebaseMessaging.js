import {useEffect, useState} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import {getApp} from '@react-native-firebase/app';
import {getMessaging} from '@react-native-firebase/messaging';

export const useFirebaseMessaging = () => {
  const [token, setToken] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const messaging = getMessaging(getApp());

        if (Platform.OS === 'android' && Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.warn('Notification request permission denied');
            setHasPermission(false);
            return;
          }
        }

        await messaging.requestPermission();
        setHasPermission(true);

        const fcmToken = await messaging.getToken();
        setToken(fcmToken);
        console.log('FCM Token:', fcmToken);
      } catch (err) {
        console.error('FCM Token Error:', err);
        setHasPermission(false);
      }
    };

    init();
  }, []);

  return {token, hasPermission};
};
