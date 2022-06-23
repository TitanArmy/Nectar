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
import {useDispatch} from 'react-redux';
import {Login} from '../Store/actions/action';

import auth from '@react-native-firebase/auth'

// create a component
const Loging = ({navigation}) => {

  

        const [username, setUsername] = useState('')
        const [password, setPassword]= useState('')
        const [errortext, setErrortext] = useState("");
        const passwordInputRef = createRef();

        
          const dispatch = useDispatch();
          const handleLogin=()=>{
            dispatch(Login(username, password));
            setErrortext("");
            if (!username) {
              alert("Please fill Email");
              return;
            }
            if (!password) {
              alert("Please fill Password");
              return; }

            auth()
              .signInWithEmailAndPassword(username, password)
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
          source={require('../../Assets/Group.png')}
        />
      </View>
      <Text style={styles.text}>Login</Text>
      {/* <Text style={{padding: 25, fontSize: 15}}>
        Enter your Email and Password
      </Text> */}

      <TextInput
        style={{marginBottom: 20}}
        label="Email"
        value={username}
        keyboardType={'email-address'}
        onChangeText={username => setUsername(username)}
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
