import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {handleIncomingMessage} from './src/firebase/messageHandler';
import {
  getMessaging,
  setBackgroundMessageHandler,
} from '@react-native-firebase/messaging';
import {getApp} from '@react-native-firebase/app';
import notifee, {EventType} from '@notifee/react-native';
import {navigateToNotificationTarget} from './src/utility/navigation.helper';

const messaging = getMessaging(getApp());

setBackgroundMessageHandler(messaging, async remoteMessage => {
  await handleIncomingMessage(remoteMessage);
});

notifee.onBackgroundEvent(async ({type, detail}) => {
  if (type === EventType.PRESS) {
    const pn_type = detail.notification?.data?.pn_type;
    if (pn_type) {
      navigateToNotificationTarget(
        pn_type,
        pn_type == 1 ? detail : detail.notification,
      );
    }
  }
});

AppRegistry.registerComponent(appName, () => App);
