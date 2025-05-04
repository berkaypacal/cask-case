import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TokenDisplay = ({token}) => (
  <View>
    <Text style={styles.label}>FCM Token:</Text>
    <Text style={styles.token}>{token}</Text>
  </View>
);

export default TokenDisplay;
