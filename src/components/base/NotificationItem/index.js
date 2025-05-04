import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  formatNotificationTitle,
  formatNotificationMessage,
  formatNotificationTime,
} from '../../../utility/notification.helper';
import styles from './styles';

/**
 * NotificationItem component renders a single notification item.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.item - The notification item data.
 * @param {Object} [props.item.notification] - The notification details.
 * @param {string} [props.item.notification.title] - The title of the notification.
 * @param {string} [props.item.notification.body] - The body of the notification.
 * @param {Object} [props.item.data] - Additional data associated with the notification.
 * @param {string} [props.item.data.pn_type] - The type of the push notification.
 * @param {number|string} [props.item.sentTime] - The time the notification was sent.
 * @param {number|string} [props.item.sent_time] - Alternative field for the sent time.
 * @param {Function} [props.onPress] - Callback function to handle press events on the notification item.
 *
 * @returns {JSX.Element} The rendered notification item component.
 */
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
