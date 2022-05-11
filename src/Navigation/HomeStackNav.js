import {View, Text} from 'react-native';
import React from 'react';
import ProductDetail from '../Screens/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import MyCart from '../Screens/MyCart';
import Delivery from '../Screens/Account/Delivery';
const Stack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
