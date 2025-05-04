let _setNotification = () => {};

export const setSelectedNotificationRef = setFn => {
  _setNotification = setFn;
};

export const setSelectedNotification = notification => {
  _setNotification(notification);
};
