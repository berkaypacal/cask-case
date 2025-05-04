import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

/**
 * TokenDisplay component displays the FCM token.
 *
 * @param {Object} props - The component props.
 * @param {string} props.token - The FCM token to display.
 *
 * @returns {JSX.Element} The rendered TokenDisplay component.
 */
const TokenDisplay = ({token}) => (
  <View>
    <Text style={styles.label}>FCM Token:</Text>
    <Text style={styles.token}>{token}</Text>
  </View>
);

export default TokenDisplay;
