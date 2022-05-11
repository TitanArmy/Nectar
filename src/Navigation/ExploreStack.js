import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '../Screens/Explore';
import BakeryAndSnacks from '../Screens/Explore/BakeryAndSnacks';
import Beverages from '../Screens/Explore/Beverages';
import DiaryAndEgg from '../Screens/Explore/DiaryAndEgg';
import FruitsAndVeg from '../Screens/Explore/FruitsAndVeg';
import MeatAndFish from '../Screens/Explore/MeatAndFish';
import Milk from '../Screens/Explore/Milk';
import OilAndGhee from '../Screens/Explore/OilAndGhee';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BakeryAndSnacks" component={BakeryAndSnacks} />
      <Stack.Screen name="Beverages" component={Beverages} />
      <Stack.Screen name="DiaryAndEgg" component={DiaryAndEgg} />
      <Stack.Screen name="FruitsAndVeg" component={FruitsAndVeg} />
      <Stack.Screen name="MeatAndFish" component={MeatAndFish} />
      <Stack.Screen name="Milk" component={Milk} />
      <Stack.Screen name="OilAndGhee" component={OilAndGhee} />
    </Stack.Navigator>
  );
};

export default AccountStack;
