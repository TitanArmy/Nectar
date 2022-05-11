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
              <Image source={(require('../../Assets/carrot.png'))}
              style={{alignSelf:'center',top:380,left:20}}/>
      <View style={{alignItems:'center',justifyContent:'center',position:'absolute',left:90,top:440}}>
  
       <Text style={{fontSize:40,fontWeight:"bold",color:'#fff'}}>Welcome</Text>
       <Text style={{fontSize:40,fontWeight:"bold",color:'#fff'}}>To Our Store</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',position:'absolute',left:75,top:562}}>
      <Text style={{fontSize:14,color:'#FCFCFC'}}>Get Your Groceries in as fast as one hour</Text>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('BottomNavigation')}>
          
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
    alignItems:'center',
    marginTop: 570,
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
