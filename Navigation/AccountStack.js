import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../Screens/Account';
import About from '../Screens/Account/About';
import Orders from '../Screens/Account/Orders';
import Mydetails from '../Screens/Account/Mydetails';
import Payment from '../Screens/Account/Payment';
import Promo from '../Screens/Account/Promo'
import Delivery from '../Screens/Account/Delivery'
import Notification from '../Screens/Account/Notification'
import Help from '../Screens/Account/Help'
import UserPage from '../Screens/Account/UserPage'

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Accounts" component={Account} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="Mydetails" component={Mydetails} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="Promo" component={Promo} />
    <Stack.Screen name="Delivery" component={Delivery} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="UserPage" component={UserPage} />
  </Stack.Navigator>
  )
}

export default AccountStack