import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import DetailProfile from '../screens/DetailProfile';

const Stack = createStackNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="DetailProfile" component={DetailProfile} />
    </Stack.Navigator>
  );
};

export default MyStackNavigator;
