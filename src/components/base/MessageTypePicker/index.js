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
      <Picker.Item label="Text" value="text" />
      <Picker.Item label="Image" value="image" />
      <Picker.Item label="Video" value="video" />
    </Picker>
  </View>
);

export default MessageTypePicker;
