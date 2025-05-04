import React from 'react';
import {Text} from 'react-native';
import LayoutComponent from '../../../components/base/LayoutComponent';
import BottomTabLabels from '../../../constants/BottomTabLabels';

const DefaultScreen = () => {
  return (
    <LayoutComponent title={BottomTabLabels.TAB_ONE}>
      <Text>Native Stack Navigator</Text>
    </LayoutComponent>
  );
};

export default DefaultScreen;
