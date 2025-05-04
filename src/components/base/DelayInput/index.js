import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

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
