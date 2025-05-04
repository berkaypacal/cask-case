import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

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
