import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  formatNotificationTitle,
  formatNotificationMessage,
  formatNotificationTime,
} from '../../../utility/notification.helper';
import styles from './styles';

const NotificationItem = ({item, onPress}) => {
  const {title, body} = item.notification || {};
  const {pn_type} = item.data || {};
  const time = formatNotificationTime(item.sentTime || item.sent_time);
  const message = formatNotificationMessage(pn_type, body);

  return (
    <TouchableOpacity onPress={() => onPress?.(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{formatNotificationTitle(title)}</Text>
        <Text style={styles.body}>{message}</Text>
        <Text style={styles.timestamp}>{time}</Text>
        <View style={styles.separator} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
