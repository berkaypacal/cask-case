import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

import { getApp } from '@react-native-firebase/app';
import { getMessaging, onMessage } from '@react-native-firebase/messaging';
import { handleIncomingMessage } from './src/firebase/messageHandler';
import { useFirebaseMessaging } from './src/hooks/useFirebaseMessaging';
import notifiee, { AndroidImportance } from '@notifee/react-native';

export default function App() {
  const { hasPermission } = useFirebaseMessaging();

  useEffect(() => {
    if (!hasPermission) return;

    const messaging = getMessaging(getApp());
    const unsubscribe = onMessage(messaging, handleIncomingMessage);
    notifiee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
    return () => unsubscribe();
  }, [hasPermission]);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}