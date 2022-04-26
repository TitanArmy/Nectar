

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



const CELL_COUNT = 6

const UnderlineExample = ({navigation}) => {
    const [confirm, setConfirm] = useState(null);
  const [value, setValue] = useState('');




  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });



  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }
  // console.log('response',value)

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Enter Your 6-Digit Code</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => 
        (
          <View
            
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
         style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          marginTop:100,
          marginLeft:280,
          width:75,
          height:75,
          backgroundColor:'#53B175',
          borderRadius:50,
        }} 
        onPress={()=> navigation.navigate("Location")}
        
        > 
        <Text style={{color:"#fff"}}>Next</Text>

      </TouchableOpacity>



    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

title:{
fontSize:20,
fontWeight:'bold',
textAlign:'center',
marginTop:20,
color:'black'
},

    codeFieldRoot: {
        marginTop: 70,
        width: 220,
        paddingLeft: 10,
        paddingRight: 10,
        overflow: "visible",
      },
      cellRoot: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        overflow: "visible",
      },
      cellText: {
        color: '#000',
        fontSize: 26,
        textAlign: 'center',
       
      },
      focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
      },


})

export default UnderlineExample;