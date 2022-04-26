import React, {useState, useRef} from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity,Button } from 'react-native'
import { TextInput } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
const MyComponent = ({navigation}) => {

const [phoneNumber, setPhoneNumber] = useState('')
const phoneInput = useRef(null);
const [confirm, setConfirm] = useState(null);

 
const  signInWithPhoneNumber = async()=>{
    await auth().signInWithPhoneNumber(phoneNumber).then((response)=>{
        setConfirm(response.data);
    }).then(()=>{
        navigation.navigate("OtpScreen")
    }).catch((error)=>{console.log(error)})
   
    // if (error.code == 'auth/invalid-verification-code') {
    //   console.log('Invalid code.');
    // } else {
    //   console.log('Account linking error');
    // }
  }

  

  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }


  // if (!confirm) {
  //   return (
  //     <Button
  //       title="Phone Number Sign In"
  //        onPress={() => signInWithPhoneNumber(phoneNumber)}
  //     />
  //   );
  // }


// const getPhoneNumber = () => {
//     Alert.alert(phoneNumber);
//   };


return (
    <View style={styleSheet.MainContainer}>

      <Text style={styleSheet.heading}> Enter your Phone Number </Text>

      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        keyboardType="number-pad"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styleSheet.phoneNumberView}
        textContainerStyle={{ paddingVertical: 3 }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />

      <TouchableOpacity  style={styleSheet.button} onPress={() => signInWithPhoneNumber(phoneNumber)
        //  navigation.navigate("OtpScreen")
         }>
        <Text style={styleSheet.buttonText}>Get OTP</Text>
      </TouchableOpacity >

    </View>
  );

};

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading:{
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black'
  },

  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: '#53B175',
  },

  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});

export default MyComponent;

