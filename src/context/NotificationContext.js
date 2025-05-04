import React, {createContext, useState, useContext, useEffect} from 'react';
import {setSelectedNotificationRef} from './NotificationContextHelper';

const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    setSelectedNotificationRef(setSelectedNotification);
  }, []);

  return (
    <NotificationContext.Provider
      value={{selectedNotification, setSelectedNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);
