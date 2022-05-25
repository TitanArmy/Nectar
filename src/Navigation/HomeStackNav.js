import {View, Text} from 'react-native';
import React from 'react';
import ProductDetail from '../Screens/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import MyCart from '../Screens/MyCart';
import Delivery from '../Screens/Account/Delivery';
import BakeryAndSnacks from '../Screens/Explore/BakeryAndSnacks';
import Beverages from '../Screens/Explore/Beverages';
import DiaryAndEgg from '../Screens/Explore/DiaryAndEgg';
import FruitsAndVeg from '../Screens/Explore/FruitsAndVeg';
import Seeall from '../Screens/Seeall'
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
      <Stack.Screen name="BakeryAndSnacks" component={BakeryAndSnacks} />
      <Stack.Screen name="Beverages" component={Beverages} />
      <Stack.Screen name="DiaryAndEgg" component={DiaryAndEgg} />
      <Stack.Screen name="FruitsAndVeg" component={FruitsAndVeg} />
      <Stack.Screen name="Seeall" component={Seeall} />

      
    </Stack.Navigator>
  );
};

export default HomeStackNav;
