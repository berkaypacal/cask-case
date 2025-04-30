import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DefaultScreen from '../screens/TabOne/DefaultScreen';
import TabTwo from '../screens/TabTwo';
import TabThree from '../screens/TabThree';
import TextScreen from '../screens/TabOne/TextScreen';
import ImageScreen from '../screens/TabOne/ImageScreen';
import VideoScreen from '../screens/TabOne/VideoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabOneStack = () => (
  <Stack.Navigator
    initialRouteName="DefaultScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="DefaultScreen" component={DefaultScreen} />
    <Stack.Screen name="TextScreen" component={TextScreen} />
    <Stack.Screen name="ImageScreen" component={ImageScreen} />
    <Stack.Screen name="VideoScreen" component={VideoScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabOne">
      <Tab.Screen name="TabOne" component={TabOneStack} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
      <Tab.Screen name="TabThree" component={TabThree} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
