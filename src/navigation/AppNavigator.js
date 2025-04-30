import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DefaultScreen from '../screens/TabOne/DefaultScreen';
import TabTwo from '../screens/TabTwo';
import TabThree from '../screens/TabThree';
import TextScreen from '../screens/TabOne/TextScreen';
import ImageScreen from '../screens/TabOne/ImageScreen';
import VideoScreen from '../screens/TabOne/VideoScreen';
import tabBarStyles from './AppNavigator.styles';
import ScreenNames from '../constants/ScreenNames';
import BottomTabLabels from '../constants/BottomTabLabels';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabOneStack = () => (
  <Stack.Navigator
    initialRouteName={ScreenNames.DEFAULT_SCREEN}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ScreenNames.DEFAULT_SCREEN} component={DefaultScreen} />
    <Stack.Screen name={ScreenNames.TEXT_SCREEN} component={TextScreen} />
    <Stack.Screen name={ScreenNames.IMAGE_SCREEN} component={ImageScreen} />
    <Stack.Screen name={ScreenNames.VIDEO_SCREEN} component={VideoScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        ...tabBarStyles,
      }}
      initialRouteName={ScreenNames.TAB_ONE}>
      <Tab.Screen
        name={ScreenNames.TAB_ONE}
        component={TabOneStack}
        options={{
          tabBarLabel: BottomTabLabels.TAB_ONE,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name={ScreenNames.TAB_TWO}
        component={TabTwo}
        options={{
          tabBarLabel: BottomTabLabels.TAB_TWO,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name={ScreenNames.TAB_THREE}
        component={TabThree}
        options={{
          tabBarLabel: BottomTabLabels.TAB_THREE,
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
