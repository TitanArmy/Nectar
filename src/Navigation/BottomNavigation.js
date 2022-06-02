import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CartNavigation from './CartNavigation';
import AccountStack from './AccountStack';
import HomeStack from './HomeStackNav';
import Favourites from '../Screens/Favourites';
import ExploreStack from './ExploreStack';
import HomeStackNav from './HomeStackNav';

import { useSelector,useDispatch } from 'react-redux';

const BottomNavigation = () => {
  const addGroceryItems = useSelector(state => state.groceryReducers.groceryItems)
  let cartVal =addGroceryItems.length
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homes"
        component={HomeStackNav}
        options={{
          headerShown: false,
          activeTintColor: 'red',
          inactiveTintColor: 'red',
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
        name="ExploreStack"
        component={ExploreStack}
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
        component={CartNavigation}
        options={{
          headerShown: false,
          tabBarBadge: cartVal,
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
        component={AccountStack}
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
