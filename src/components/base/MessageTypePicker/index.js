import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

/**
 * MessageTypePicker is a component for selecting a push notification (PN) type.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.pnType - The currently selected PN type.
 * @param {Function} props.setPnType - Function to update the selected PN type.
 * @returns {JSX.Element} The rendered MessageTypePicker component.
 */
const MessageTypePicker = ({pnType, setPnType}) => (
  <View style={styles.dropdown}>
    <Picker
      selectedValue={pnType}
      onValueChange={itemValue => setPnType(itemValue)}
      style={styles.picker}
      dropdownIconColor="#999">
      <Picker.Item label="Select PN Type" value="" />
      <Picker.Item label="Text" value="1" />
      <Picker.Item label="Image" value="2" />
      <Picker.Item label="Video" value="3" />
    </Picker>
  </View>
);

export default MessageTypePicker;
