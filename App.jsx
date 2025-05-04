import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { navigationRef } from './src/utility/navigation.helper';
import { useFirebaseMessaging } from './src/hooks/useFirebaseMessaging';
import { useNotificationHandler } from './src/hooks/useNotificationHandler';

export default function App() {
  const { hasPermission } = useFirebaseMessaging();

  useNotificationHandler(hasPermission);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}