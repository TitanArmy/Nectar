import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Checkout = (props) => {
  const navigation = useNavigation(); 
  return (
    <View style={{backgroundColor:'#f67b9a',position:"absolute",bottom:0,width:"100%",borderTopLeftRadius:20,borderTopRightRadius:20}}>
     
     {/* {/ CHECKOUT /} */}
     <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,paddingVertical:30}}>
        <Text style={{fontWeight:'bold',fontSize:20}}>Checkout</Text>
       <TouchableOpacity 
       
      //  onPress={()=>{navigation.navigate('ErrorScreen')}}
      onPress={()=>{props.closeBtn(false) 
      }}
       >
       <Image
          source={require('../Assets/cross.png')}
        />
       </TouchableOpacity>
     </View>

     {/* {/ Delivery /} */}
     <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center',marginHorizontal:20,borderBottomWidth:1,paddingVertical:10,borderColor:'#e2e2e2'}}>
       <Text>Delivery</Text>
       <View style={{flexDirection:'row'}}>
       <Text>Select Method</Text>
        <Image
        style={{marginLeft:10}}
          source={require('../Assets/rightArrow.png')}
        />
       </View>
     </View>

     {/* {/ Payment /} */}
     <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,borderBottomWidth:1,paddingVertical:10,borderColor:'#e2e2e2'}}>
       <Text>Payment</Text>
       <View  style={{flexDirection:'row'}}>
       <Image
       source={require('../Assets/card.png')}/>

        <Image
        style={{marginLeft:10}}
          source={require('../Assets/rightArrow.png')}
        />
       </View>
     </View>

     {/* {/ PROMO CODE /} */}
     <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,borderBottomWidth:1,paddingVertical:10,borderColor:'#e2e2e2'}}>
       <Text>Promo Code</Text>
       <View style={{flexDirection:'row'}}>
       <Text>Pick Discount</Text>
        <Image
        style={{marginLeft:10}}
          source={require('../Assets/rightArrow.png')}
        />
       </View>
     </View>
    {/* {/ TOTAL COST /} */}
    <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,borderBottomWidth:1,paddingVertical:10,borderColor:'#e2e2e2'}}>
       <Text>Total Cost</Text>
       <View style={{flexDirection:'row'}}>
       <Text>$13.97</Text>
        <Image
        style={{marginLeft:10}}
          source={require('../Assets/rightArrow.png')}
        />
       </View>
    </View>

    {/* {/ T&C /} */}
    <View style={{justifyContent:'center',marginHorizontal:20,marginVertical:40}}>
    <Text>By placing an order you agree to our</Text>
    <Text><Text style={{fontWeight: "bold"}}>Terms</Text> And <Text style={{fontWeight: "bold"}}>Conditions</Text></Text>
    </View>
    
    <TouchableOpacity 
    style={{justifyContent:'center',alignItems:'center',backgroundColor:'#53B175',padding:15,marginHorizontal:30,borderRadius:10,marginVertical:10,marginBottom:20}}
    onPress={()=>navigation.navigate('OrderAccepted')}
    >
      <Text style={{color:'white'}}> Place Order</Text>
    </TouchableOpacity>

    {/* {/ <Filters/> /} */}
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({})
