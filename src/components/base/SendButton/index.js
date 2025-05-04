import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

/**
 * SendButton component renders a button with a loading indicator.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onPress - Callback function to handle button press events.
 * @param {boolean} props.isLoading - Indicates whether the button is in a loading state.
 *
 * @returns {JSX.Element} The rendered SendButton component.
 */
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
