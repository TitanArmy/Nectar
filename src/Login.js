//import liraries
import React, {createRef,useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';

import auth from '@react-native-firebase/auth'

// create a component
const Loging = ({navigation}) => {

        const [email, setEmail] = useState('')
        const [password, setPassword]= useState('')
        const [errortext, setErrortext] = useState("");
        const passwordInputRef = createRef();

     




          const handleLogin=()=>{
            setErrortext("");
            if (!email) {
              alert("Please fill Email");
              return;
            }
            if (!password) {
              alert("Please fill Password");
              return; }

            auth()
              .signInWithEmailAndPassword(email, password)
              .then((user) => {
                console.log(user);
                // If server response message same as Data Matched
                if (user) navigation.replace("BottomNavigation");
              })
              .catch((error) => {
                // console.log(error);
                if (error.code === "auth/invalid-email")
                  alert(error.message);
                else if (error.code === "auth/user-not-found")
                  alert("User Not Found");
                else {
                  alert(
                    "Please check your email id or password"
                  );
                }
              });
          }





  return (
    <View style={{padding: 25}}>
      <View style={styles.container}>
        <Image
          style={{marginTop: 10,height: 90, width: 75}}
          source={require('../Assets/Group.png')}
        />
      </View>
      <Text style={styles.text}>Login</Text>
      {/* <Text style={{padding: 25, fontSize: 15}}>
        Enter your Email and Password
      </Text> */}

      <TextInput
        style={{marginBottom: 20}}
        label="Email"
        value={email}
        keyboardType={'email-address'}
        onChangeText={email => setEmail(email)}
      />

      <TextInput
        label="Passsword"
        value={password}
        keyboardType='default'
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        onSubmitEditing={() =>
          passwordInputRef.current &&
          passwordInputRef.current.focus()
        }
      />


      <TouchableOpacity
     onPress={handleLogin}
      style={styles.button}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>


      <TouchableOpacity  onPress={()=> navigation.navigate('Signup')}  >
        <Text style={styles.text2}>Don't have an account? Signup</Text>
        
        </TouchableOpacity>
    

            <TouchableOpacity  onPress={()=> navigation.navigate('Forgotpass')}>
                <Text style={{marginLeft:50,marginTop:30,color:'black'}}>Forgot Passsword?</Text>
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
   paddingTop:100,
   marginHorizontal:20,
   color:'black',marginLeft:50

  },
  text3: {
    padding:30,
    marginHorizontal:20,
    color: 'black'
   },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
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
export default Loging;













// //import liraries
// import React, { useEffect, useState } from 'react';
// import { View, keyboardAvoidingView,Text, StyleSheet, TextInput, SafeAreaView , TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import { Button } from 'react-native-elements';
// //import {auth} from '../firebase';
// import auth from '@react-native-firebase/auth'

// // create a component
// const MyComponent = ({navigation}) => {


//         const [email, setEmail] = useState('')
//         const [password, setPassword]= useState('')

//           useEffect(()=>{
//                  const unsubscibe= auth.onAuthStateChanged(user =>{
//                     if(user) {
//                       navigation.navigate('Home')
//                     }
//                   })
//                   return unsubscibe
//           },[])









// //sign up
//         const handleSignup=()=>{
//           auth
//           .createUserWithEmailAndPassword(email,password)
//           .then(userCredentials => {
//             const user = userCredentials.user;
//             console.log(user.email);

//           })
//           .catch(error =>  alert(error.message))
//         }


//         //login


//           const handleLogin=()=>{
//             auth
//             .signInWithEmailAndPassword(email,password)
//             .then(userCredentials =>{
//               const user =userCredentials.user;
//               console.log('Logged in with:', user.email);
//             })
//             .catch(error=> alert(error.message))
//           }

        
// //sign or sign up

// //  const  [create, setCreate]= useState('')










//     return (
    
// <SafeAreaView style={styles.container}>





// <View style={styles.inputView}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Email"
//     value={email}
//     onChangeText={text=> setEmail(text)}
//     placeholderTextColor="#003f5c"
//     //onChangeText={(email)
//  => setEmail(email)}
//   />


// </View>
 
// <View style={styles.inputView}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Password"
//     value={password}
//     onChangeText={text=> setPassword(text)}
//     placeholderTextColor="#003f5c"
//     secureTextEntry={true}
//    // onChangeText={(password) => setPassword(password)}
//   />
// </View>


// <TouchableOpacity>
//   <Text style={styles.forgot_button}>Forgot Password?</Text>
// </TouchableOpacity>


// {/* <TouchableOpacity style={styles.loginBtn}>
//   <Text style={styles.loginText}>LOGIN</Text>


// </TouchableOpacity> */}


// <Button title={"Login"}

//         color='#841584'
//         onPress={handleLogin} />


// <Button title={"Register"}
//          color='#841584'
//           onPress={handleSignup} />


// </SafeAreaView>


//   )





  
// }






// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     //backgroundColor: '#2c3e50',
//   },
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
  
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   loginBtn:
//  {
//    width:"80%",
//    borderRadius:25,
//    height:50,
//    alignItems:"center",
//    justifyContent:"center",
//    marginTop:40,
//    backgroundColor:"#FF1493",
//  },
//  forgot_button: {
//   height: 30,
//   marginBottom: 30,
// },

//  text:{

//    fontSize:50,
//    fontWeight:"bold",
  
   
//  }
// });

// //make this component available to the app
// export default MyComponent;
