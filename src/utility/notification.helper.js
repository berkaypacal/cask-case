/**
 * Utility functions to assist with notification-related operations in a React Native application.
 *
 * This module provides functions to format notification titles, messages, and timestamps.
 */

export const formatNotificationTitle = title => {
  return title?.trim() || 'No Title';
};

export const formatNotificationMessage = (pn_type, body) => {
  switch (pn_type) {
    case '2':
      return 'Image notification';
    case '3':
      return 'Video notification';
    default:
      return body?.trim() || 'No Message';
  }
};

export const formatNotificationTime = timestamp => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString();
};
