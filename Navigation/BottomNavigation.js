import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import Favourites from '../Screens/Favourites';
import Explore from '../Screens/Explore';
import Cart from '../Screens/Cart';
import Account from '../Screens/Account';
import Checkout from '../Screens/Checkout';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    //  initialRouteName={Account}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../Assets/storeA.png')
                  : require('../Assets/store.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Assets/exploreA.png')
                    : require('../Assets/explore.png')
                }
              />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Assets/cartA.png')
                    : require('../Assets/cart.png')
                }
              />
            ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Assets/favA.png')
                    : require('../Assets/fav.png')
                }
              />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Assets/accountA.png')
                    : require('../Assets/account.png')
                }
              />
            ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Assets/accountA.png')
                    : require('../Assets/account.png')
                }
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
