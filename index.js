import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {handleIncomingMessage} from './src/firebase/messageHandler';
import {
  getMessaging,
  setBackgroundMessageHandler,
} from '@react-native-firebase/messaging';
import {getApp} from '@react-native-firebase/app';

const messaging = getMessaging(getApp());

setBackgroundMessageHandler(messaging, async remoteMessage => {
  await handleIncomingMessage(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
