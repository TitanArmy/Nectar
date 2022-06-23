import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/Screens/Store/index';
import reduxStore from './src/Screens/Store/index';
import { initializeConnect } from 'react-redux/es/components/connect';
import { Init } from './src/Screens/Store/actions/action';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth'

const store = configureStore();
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  const {store, persistor} = reduxStore();

  // const dispatch = useDispatch();
  //         const init=()=>{
  //           dispatch(Init);
  //         }
  
  // useEffect(()=> {
  //    init()
  // },[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
