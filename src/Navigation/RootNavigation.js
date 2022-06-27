import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNavigation from './BottomNavigation';
import StackNavigation from './StackNavigation';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <BottomNavigation/>
        <StackNavigation/>
    </NavigationContainer>

  );
};
export default RootNavigation;
