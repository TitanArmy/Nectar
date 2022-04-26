
//import liraries
import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import { useState } from 'react';

// create a component
const Signup = ({navigation}) => {
  const [displayName, setDisplayName] = React.useState();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState();

 
   


  return (
    <View style={{padding: 20}}>
      <View style={styles.container}>
        <Image
          style={{marginTop: 10,height: 90, width: 75}}
          source={require('../Assets/Group.png')}
        />
      </View>
      <Text style={styles.text}>Signup</Text>
      {/* <Text style={{padding: 25, fontSize: 15}}>
        Enter your Credentials to Continue
      </Text> */}
      <TextInput
        style={{marginBottom: 20}}
        label="DisplayName"
        value={displayName}
       // keyboardType={'email-address'}
        onChangeText={displayName => setDisplayName(displayName)}
      />

      <TextInput
        style={{marginBottom: 20}}
        label="Email"
        value={email}
        keyboardType={'email-address'}
        onChangeText={email => setEmail(email)}
      />

      <TextInput
        label="Passsword"
        value={pass}
        keyboardType={'ascii-capable'}
        onChangeText={pass => setPass(pass)}
      />
      <TouchableOpacity
      onPress={() => navigation.navigate('BottomNavigation')}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign-Up</Text>
      </TouchableOpacity>
    

        <TouchableOpacity>
        <Text style={styles.text2}>By continuing you agree to our Terms of Service and Privacy Policy.</Text>
        </TouchableOpacity>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#bad4c7'
  },
  text: {
    fontSize: 35,
    // alignItems:'flex-start',
    fontWeight: 'bold',
    color: 'black',
    padding: 25,
    marginTop: 100,
  },
  text2: {
   padding:40,
   marginHorizontal:11,fontStyle: "italic", paddingLeft:2, color: 'black'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
    width: '80%',
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#53B175',
    marginLeft: 25,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

//make this component available to the app
export default Signup;
