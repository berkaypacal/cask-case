import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { navigationRef } from './src/utility/navigation.helper';
import { useFirebaseMessaging } from './src/hooks/useFirebaseMessaging';
import { useNotificationHandler } from './src/hooks/useNotificationHandler';
import { NotificationProvider } from './src/context/NotificationContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  const { hasPermission } = useFirebaseMessaging();

  useNotificationHandler(hasPermission);

  return (
    <NotificationProvider>
      <NavigationContainer ref={navigationRef}>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </NotificationProvider>
  );
}