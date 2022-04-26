import Signin from '../src/Signin';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import OtpScreen from '../src/OtpScreen';
import Location from '../src/Location'
import OnBoarding  from '../src/Onboarding'
import Map from '../src/Map'
import Login from '../src/Login'
import Signup  from '../src/Signup'
import Dashboard from '../src/Dashboard'
import Forgotpass from '../src/Forgotpass'
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../Screens/Logs/SplashScreen';

const Stack = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';




import {View, Text, StyleSheet} from 'react-native';


// create a component
const MyComponent = () => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setShowSplashScreen(false);
      }, 1500);
    }, []);
  return (
   
      <Stack.Navigator>
    {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            screenOptions={{tabBarIconStyle: { display: "none" }}}
            component={SplashScreen}
            options={{headerShown: false}}
            />
            ) : null}

      <Stack.Screen
          name="OnBoarding"
           initialRouteName={OnBoarding}
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          initialRouteName={Signin}
          component={Signin}
        />
          <Stack.Screen name='BottomNavigation' component={BottomNavigation}
                      options={{
                        headerShown:false,
                      }}
                    />
        
        <Stack.Screen name="OtpScreen"  component={OtpScreen} />


        <Stack.Screen name="Location"  component={Location} />
      
        <Stack.Screen name="Map" component={Map} /> 

       
        <Stack.Screen name="Login" options={{
            headerShown: false,
          }} component={Login} />


        <Stack.Screen name="Signup" options={{
            headerShown: false,
          }} component={Signup} />



        <Stack.Screen name="Dashboard" options={{
            headerShown: false,
          }} component={Dashboard} />


<Stack.Screen name="Forgotpass" options={{
            headerShown: false,
          }} component={Forgotpass} /> 

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