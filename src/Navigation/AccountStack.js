import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Account from '../Screens/Account';
import Admin from '../Screens/Account/Admin';
import Orders from '../Screens/Account/Orders';
import Mydetails from '../Screens/Account/Mydetails';
import Payment from '../Screens/Account/Payment';
import Promo from '../Screens/Account/Promo';
import Delivery from '../Screens/Account/Delivery';
import NotificationServices from '../Screens/Account/NotificationServices';
import Help from '../Screens/Account/Help';
import UserPage from '../Screens/Account/UserPage';
import Cart from '../Screens/Cart'


const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Mydetails" component={Mydetails} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Promo" component={Promo} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen
        name="NotificationServices"
        component={NotificationServices}
      />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="UserPage" component={UserPage} />

    </Stack.Navigator>
  );
};

export default AccountStack;
