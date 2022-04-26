//import liraries
import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// create a component
const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/background.png')}
        style={styles.image}>
       
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
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
  image: {
    height: '100%',
    width: '100%',
  },

  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    alignItems:'center',
    marginTop: 550,
    padding:20,
    backgroundColor: '#53B175',
    borderRadius:40,
    width: 320,  
    height:70,
    marginHorizontal:45
  },
  text2:{
    fontSize:35
  }
});

//make this component available to the app
export default OnBoarding;
