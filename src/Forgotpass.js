
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

// create a component
const Forgotpass = () => {
  const [Currentpass, setCurrentPass] = React.useState();
  const [Newpass, setNewPass] = React.useState('');
//   const [Newpass, setPass] = React.useState();

  return (
    <View style={{padding: 30}}>
      <View style={styles.container}>
        <Image
          style={{marginTop: 10,height: 90, width: 75}}
          source={require('../Assets/Group.png')}
        />
      </View>
      <Text style={styles.text}>Forgot Password</Text>
   
      <TextInput
        style={{marginBottom: 30}}
        label="Current Password"
        value={Currentpass}
       // keyboardType={'email-address'}
        onChangeText={Currentpass => setCurrentPass(Currentpass)}
      />

      <TextInput
        style={{marginBottom: 40}}
        label="New Password"
        value={Newpass}
        keyboardType={'email-address'}
        onChangeText={Newpass => setNewPass(Newpass)}
      />

     
      <TouchableOpacity
      
      style={styles.button}>
        <Text style={styles.buttonText}>SUBMIT</Text>
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
    fontSize: 25,
    marginHorizontal: 10,
    // alignItems:'flex-start',
    fontWeight: 'bold',
    color: 'black',
    padding: 35,
    marginTop: 100,
    paddingLeft:2
    // marginTop:20

  },
  text2: {
   padding:40,
   marginHorizontal:11,fontStyle: "italic", paddingLeft:10, color: 'black'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
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

export default Forgotpass;
