//import liraries
import React, { Component } from 'react';
import { View,Image, Text,TouchableOpacity, StyleSheet,Button } from 'react-native';

// create a component
const Location = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../Assets/illustration.png')} />
            <Text style={styles.text1}> Select Your Location</Text>
            <Text style={styles.text2}>Switch on your location to stay in tune with what's happening in your area</Text>
            {/* <Text style={{marginTop:70, color:'blue'}}>Tap Below to select Location</Text> */}
            {/* <Button title="Tap Below to select Location"
            style={{ color:'blue', paddingBottom:10}}onPress={()=> navigation.navigate("Login")} /> */}
<TouchableOpacity
     onPress={()=> navigation.navigate("Login")}
     style={styles.button}>
       <Text style={styles.buttonText}>Tap Below to select Location</Text>
    
     </TouchableOpacity>

<TouchableOpacity
style={{
    marginTop:80
    
}}
onPress={()=> navigation.navigate("Map")}
>

<Image source={require('../Assets/Google.png')} resizeMode='contain' style={{height:90,width:100} }/>

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
        marginTop:50,
        // backgroundColor: '#bad4c7',
    },
    text1:{
        color:'black',
        marginTop:30,
        fontSize:25,
        fontWeight:"bold"
    },
    text2:{
        fontSize:18,
        textAlign:'center',
        marginTop:25,fontStyle: "italic",
        paddingHorizontal:20 
       
    },
    buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    width: '80%',
    padding: 8,
     borderRadius: 10,
    backgroundColor: '#53B175',
    marginLeft: 25,color:'white'
      },
});

//make this component available to the app
export default Location;
