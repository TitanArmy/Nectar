import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const OrderAccepted = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff'}}>
     <Image
     source={require('../Assets/Rectangle.png')}
     />
     <View>
         <Image style={{height:240,width:270,bottom:410,left:43}}
         source={require('../Assets/first.png')}
         />
        
     </View>
    
     <View>
         <Text style={{fontWeight:'bold',fontSize:30,bottom:380,color:'#181725',margin:10,textAlign:'center'}}>
             Your Order Has been Placed
         </Text>
     </View>


     <View>
         <Text style={{fontSize:15,bottom:410,color:'#7C7C7C',margin:40,textAlign:'center'}}>
         Your items has been placcd and is on it’s way to being processed
         </Text>
     </View>
<View>

     <TouchableOpacity style={{backgroundColor: '#53B175',alignItems:'center',bottom:390,marginHorizontal:25,borderRadius:10,padding:13}}
     onPress={()=>{navigation.navigate('ErrorScreen')}}
     >
        
        <Text style={{color:'#FFF9FF',fontWeight:'bold',fontSize:18,textAlign:'center'}}>
            Track Order
        </Text>
        </TouchableOpacity>
        
</View>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
         onPress={()=>{navigation.navigate('Home')}}
        >
        <Text style={{bottom:373,color:'#181725',fontWeight:'bold',fontSize:20}}>
            Back To Home
        </Text>
     </TouchableOpacity>



    </View>
  )
}

export default OrderAccepted