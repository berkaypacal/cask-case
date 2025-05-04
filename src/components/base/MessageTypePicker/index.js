import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import NotificationTypes from '../../../constants/NotificationTypes';

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
      <Picker.Item label="Text" value={NotificationTypes.TEXT} />
      <Picker.Item label="Image" value={NotificationTypes.IMAGE} />
      <Picker.Item label="Video" value={NotificationTypes.VIDEO} />
    </Picker>
  </View>
);

export default MessageTypePicker;
