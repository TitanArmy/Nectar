import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Signin from '../Screens/Auth/Signin';
import OtpScreen from '../Screens/Auth/OtpScreen';
import Location from '../Screens/Auth/Location';
import OnBoarding from '../Screens/Auth/Onboarding';
import Map from '../Screens/Auth/Map';
import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import Dashboard from '../Screens/Auth/Dashboard';
import Forgotpass from '../Screens/Auth/Forgotpass';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../Screens/SplashScreen';
import ProductDetail from '../Screens/ProductDetail';

import {View, Text, StyleSheet} from 'react-native';
import Social from '../Screens/Auth/Social';


const Stack = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// create a component
const MyComponent = () => {
  // const [showSplashScreen, setShowSplashScreen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSplashScreen(false);
  //   }, 1500);
  // }, []);
  return (

    
    <Stack.Navigator>
      {/* {showSplashScreen ? (
        <Stack.Screen
          name="Splash"
          screenOptions={{tabBarIconStyle: {display: 'none'}}}
          component={SplashScreen}
          options={{headerShown: false}}
        />
      ) : null} */}


      <Stack.Screen
        name="OnBoarding"
        initialRouteName={OnBoarding}
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
  name="BottomNavigation"
  component={BottomNavigation}
  options={{
    headerShown: false,
  }}
/>
      <Stack.Screen
        name="Signin"
        initialRouteName={Signin}
        component={Signin}
      />

      <Stack.Screen 
        name="OtpScreen" 
        component={OtpScreen} />

      <Stack.Screen 
         name="Location" 
         component={Location} />

      <Stack.Screen 
        name="Map" 
        component={Map} />

      <Stack.Screen
        name="Login"
        options={{
        headerShown: false,
        }}
        component={Login}
      />

      <Stack.Screen
        name="Signup"
        options={{
          headerShown: false,
        }}
        component={Signup}
      />

      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: false,
        }}
        component={Dashboard}
      />

      <Stack.Screen
        name="Forgotpass"
        options={{
          headerShown: false,
        }}
        component={Forgotpass}
      />
      <Stack.Screen
        name="Social"
        options={{
          headerShown: false,
        }}
        component={Social}
      />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bad4c7',
  },
});

export default MyComponent;
