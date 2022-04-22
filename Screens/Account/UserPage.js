import { View, Text, TextInput,SafeAreaView, StyleSheet,ScrollView,TouchableWithoutFeedback,Alert,Button, } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import {TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function CreateUserScreen ({navigation}) {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')    
    
      
    // const presshandler=()=>{ 

    //     const userData = {
    //       name: name,
    //       phone: phone,
    //       mail: mail
    //     }

    //     const newReference = database().ref('');
    //     newReference
    //       .push(userData)
    //       .then(() => console.log('Data updated.'));
    //     }

   
    

    return (
    <ScrollView>
    <View style={{flex:1,marginTop:30,alignItems:'center'}}>
      <SafeAreaView >
        
        <Text style={styles.Texts}>Enter Name :</Text>
        <TextInput
          style={styles.input}
          placeholder="Vishal Kumar Mishra"
          value={name}
          onChangeText={text => setName(text)}
        />

        <Text  style={styles.Texts}>Enter E-mail :</Text>
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={text => setMail(text)}
          placeholder="Boy642781@gmail.com"
          keyboardType="email-address"
        />

      
       
          <View style={styles.button}>
              <TouchableOpacity onPress={()=>{navigation.navigate('Account')}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Edit Name</Text>
            </TouchableOpacity>
          </View>

      

      </SafeAreaView>
    </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  input: {
      height: 50,
    width:250,
    margin: 15,
    borderWidth: 1,
    borderRadius:8,padding:8,
    backgroundColor: 'white'

  },
  Texts:{
    marginTop:10,
    marginLeft:20,
    color:'#000',
    fontWeight:'bold'
  },
  button: {
    justifyContent:'center',
    alignItems: "center",

    backgroundColor: "#53B175",
    padding: 10,
    width:150,
    borderRadius:15,
    marginTop:30,
    marginLeft:70,

  },
});
