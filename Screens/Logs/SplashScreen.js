import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';

import Logo from '../../Assets/Splash.png';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

    

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />

        
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 300,
  },
  text: {
    color: '#fff',
  },
  bottomContainer: {},
  bottomText: {
    color: '#fff',
  },
});