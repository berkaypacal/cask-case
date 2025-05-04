import React from 'react';
import {Text, View} from 'react-native';
import LayoutComponent from '../../../components/base/LayoutComponent';
import BottomTabLabels from '../../../constants/BottomTabLabels';
import styles from './styles';

const DefaultScreen = () => {
  return (
    <LayoutComponent title={BottomTabLabels.TAB_ONE}>
      <View style={styles.container}>
        <Text>Native Stack Navigator</Text>
      </View>
    </LayoutComponent>
  );
};

export default DefaultScreen;
