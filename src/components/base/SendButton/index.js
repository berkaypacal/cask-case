import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

const SendButton = ({onPress, isLoading}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.button}
    disabled={isLoading}>
    {isLoading ? (
      <ActivityIndicator color="#fff" />
    ) : (
      <Text style={styles.buttonText}>Send</Text>
    )}
  </TouchableOpacity>
);

export default SendButton;
