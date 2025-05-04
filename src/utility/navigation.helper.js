import {createNavigationContainerRef} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import NotificationTypes from '../constants/NotificationTypes';
import {setSelectedNotification} from '../context/NotificationContextHelper';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigates to the appropriate screen based on the notification type.
 *
 * @param {number} pn_type - The type of the notification (e.g., TEXT, IMAGE, VIDEO).
 * @param {Object|null} notification - The notification object to be processed (optional).
 *
 * @example
 * navigateToNotificationTarget(NotificationTypes.TEXT, { id: 1, message: 'Hello' });
 *
 * @example
 * navigateToNotificationTarget(NotificationTypes.IMAGE, { id: 2, url: 'https://example.com/image.jpg' });
 *
 * @example
 * navigateToNotificationTarget(NotificationTypes.VIDEO, { id: 3, url: 'https://example.com/video.mp4' });
 */
export const navigateToNotificationTarget = (pn_type, notification = null) => {
  if (!navigationRef.isReady()) return;
  if (notification) {
    setSelectedNotification(notification);
  }

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
