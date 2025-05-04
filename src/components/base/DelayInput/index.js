import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

/**
 * A React component for a text input field with a delay value.
 *
 * @param {Object} props - The component props.
 * @param {string} props.delay - The current delay value in seconds.
 * @param {function} props.setDelay - The function to update the delay value.
 * @returns {JSX.Element} The DelayInput component.
 */
const DelayInput = ({delay, setDelay}) => (
  <TextInput
    style={styles.input}
    placeholder="Delay (seconds)"
    value={delay}
    onChangeText={setDelay}
    keyboardType="numeric"
  />
);

export default DelayInput;
