import {useEffect, useState} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import {getApp} from '@react-native-firebase/app';
import {getMessaging} from '@react-native-firebase/messaging';

/**
 * Custom hook to handle Firebase Cloud Messaging (FCM) in a React Native application.
 *
 * @returns {Object} An object containing the FCM token and the permission status.
 * @property {string|null} token - The FCM token for the device, or null if not available.
 * @property {boolean} hasPermission - Indicates whether the app has permission to send notifications.
 */
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
      } catch (err) {
        console.error('FCM Token Error:', err);
        setHasPermission(false);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const refreshToken = async () => {
      if (hasPermission) {
        const messaging = getMessaging(getApp());

        const fcmToken = await messaging.getToken();
        messaging.registerDeviceForRemoteMessages;
        setToken(fcmToken);
      }
    };

    refreshToken();
  }, [hasPermission]);

  return {token, hasPermission};
};
