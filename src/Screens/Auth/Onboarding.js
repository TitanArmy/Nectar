//import liraries
import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// create a component
const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/background.png')}
        style={styles.image}>
        <Image
          source={require('../../Assets/carrot.png')}
          style={{alignSelf: 'center', top: 359, left: 21}}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginVertical:425,
            marginHorizontal:110,
            left:10
            
          }}>
          <Text style={{fontSize: 33, fontWeight: 'bold', color: '#fff'}}>
            Welcome
          </Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
            To Our Store
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginHorizontal: 30,
            marginVertical:532,
          }}>
          <Text style={{fontSize: 14,marginLeft:40, color: '#FCFCFC'}}>
            Get Your Groceries in as fast as one hour
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomNavigation')}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    // {/* <View>
    //   <Image source={require('../Assets/background.png')}
    //    style={styles.image}></Image>

    //    <TouchableOpacity style={{backgroundColor: '#53B175',alignItems:'center',bottom:390,marginHorizontal:25,borderRadius:10,padding:13}}>
    //    </TouchableOpacity>
    // </View> */}
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
    alignItems: 'center',
    marginTop: 560,
    padding: 20,
    backgroundColor: '#53B175',
    borderRadius: 40,
    width: 320,
    height: 70,
    marginHorizontal: 35,
  },
  text2: {
    fontSize: 35,
  },
});

//make this component available to the app
export default OnBoarding;
