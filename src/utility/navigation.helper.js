import {createNavigationContainerRef} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import NotificationTypes from '../constants/NotificationTypes';

export const navigationRef = createNavigationContainerRef();

export const navigateToNotificationTarget = pn_type => {
  if (!navigationRef.isReady()) return;

  switch (pn_type) {
    case NotificationTypes.TEXT:
      navigationRef.navigate(ScreenNames.TAB_ONE, {
        screen: ScreenNames.TEXT_SCREEN,
      });
      break;

    case NotificationTypes.IMAGE:
      navigationRef.navigate(ScreenNames.TAB_ONE, {
        screen: ScreenNames.IMAGE_SCREEN,
      });
      break;

    case NotificationTypes.VIDEO:
      navigationRef.navigate(ScreenNames.TAB_ONE, {
        screen: ScreenNames.VIDEO_SCREEN,
      });
      break;

    default:
      break;
  }
};
