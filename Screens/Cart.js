import { View, Text,FlatList,Image,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = ({navigation}) => {
  return (
      <ScrollView>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
      <Text style={{fontWeight:'bold',fontSize:25,color:'#000'}}>My Cart</Text>
    </View>
     <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:20}} 
              source={require('../Assets/pepper.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>1kg, Price</Text>
              
              <Image style={{justifyContent:'center',alignItems:'center',marginTop:28,marginLeft:45}} 
              source={require('../Assets/minus.png')}/>
              <View style={{justifyContent:'center',marginTop:-8,marginLeft:85}} ><Text>1</Text></View>
              <Image style={{justifyContent:'center',marginTop:-15,marginLeft:115}} 
              source={require('../Assets/plus.png')}/>
              </View>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:100}} 
              source={require('../Assets/greyCross.png')}/>
              <Text style={{justifyContent:'center',marginTop:90,marginLeft:-25,fontWeight:'bold',color:'#000'}}>$4.99</Text>
    </View>
    <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:20}} 
              source={require('../Assets/pepper.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>1kg, Price</Text>
              <Image style={{justifyContent:'center',marginTop:28,marginLeft:45}} 
              source={require('../Assets/minus.png')}/>
              {/* <Image 
              source={require('../Assets/H1.png')}/> */}
              <View style={{justifyContent:'center',marginTop:-8,marginLeft:85}} ><Text>1</Text></View>
              <Image style={{justifyContent:'center',marginTop:-15,marginLeft:115}} 
              source={require('../Assets/plus.png')}/>
              </View>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:100}} 
              source={require('../Assets/greyCross.png')}/>
              <Text style={{justifyContent:'center',marginTop:90,marginLeft:-25,fontWeight:'bold',color:'#000'}}>$4.99</Text>
    </View>
    <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:20}} 
              source={require('../Assets/pepper.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>1kg, Price</Text>
              <Image style={{justifyContent:'center',marginTop:28,marginLeft:45}} 
              source={require('../Assets/minus.png')}/>
              {/* <Image 
              source={require('../Assets/H1.png')}/> */}
              <View style={{justifyContent:'center',marginTop:-8,marginLeft:85}} ><Text>1</Text></View>
              <Image style={{justifyContent:'center',marginTop:-15,marginLeft:115}} 
              source={require('../Assets/plus.png')}/>
              </View>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:100}} 
              source={require('../Assets/greyCross.png')}/>
              <Text style={{justifyContent:'center',marginTop:90,marginLeft:-25,fontWeight:'bold',color:'#000'}}>$4.99</Text>
    </View>
    <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:20}} 
              source={require('../Assets/pepper.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>1kg, Price</Text>
              <Image style={{justifyContent:'center',marginTop:28,marginLeft:45}} 
              source={require('../Assets/minus.png')}/>
              {/* <Image 
              source={require('../Assets/H1.png')}/> */}
              <View style={{justifyContent:'center',marginTop:-8,marginLeft:85}} ><Text>1</Text></View>
              <Image style={{justifyContent:'center',marginTop:-15,marginLeft:115}} 
              source={require('../Assets/plus.png')}/>
              </View>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:100}} 
              source={require('../Assets/cross.png')}/>
              <Text style={{justifyContent:'center',marginTop:90,marginLeft:-25,fontWeight:'bold',color:'#000'}}>$4.99</Text>
    </View>
   
   
    <TouchableOpacity 
      style={{justifyContent:'flex-end',alignItems:'center',marginTop:60,padding:20,backgroundColor:'#53B175',borderRadius:15,marginLeft:20,marginRight:20,flexDirection:'row'}} 
      onPress={()=>{navigation.navigate('ErrorScreen')}} 

    >
                
                <Text style={{color: '#000',fontWeight:'bold',marginRight:70}}>Go to Checkout</Text>
                <Text style={{color: '#000',fontWeight:'bold',}}>$12.96</Text>
              
    </TouchableOpacity>

    </ScrollView>
   
  )
}

export default Cart


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Cart = () => {
//   return (
//     <View>
//       <Text>Cart</Text>
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({})