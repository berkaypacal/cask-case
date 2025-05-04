import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LayoutComponent from '../../../components/base/LayoutComponent';
import {useNotificationContext} from '../../../context/NotificationContext';
import styles from './styles';

const TextScreen = () => {
  const {selectedNotification} = useNotificationContext();

  const title = selectedNotification?.notification?.title;
  const body = selectedNotification?.notification?.body;

  return (
    <LayoutComponent title="Text Screen">
      <View style={styles.container}>
        <Text style={styles.title}>{title || 'No Title'}</Text>
        <Text style={styles.body}>{body || 'No Message'}</Text>
      </View>
    </LayoutComponent>
  );
};

export default TextScreen;
