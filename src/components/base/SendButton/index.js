import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const SendButton = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Send</Text>
  </TouchableOpacity>
);

export default SendButton;
