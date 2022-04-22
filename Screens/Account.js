import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
// import {  } from 'react-native-gesture-handler'

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      {/* USER INFO */}
      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10,marginVertical:27}}>

        {/* UserIMG */}
        <View 
        style={{borderRadius:20}}
        >
          <Image
            style={{width: 40,height: 40,}}
            source={require('../Assets/user.png')}
          />
       
        </View>
      
        {/* UserNAME */}
        <View style={{paddingLeft:20,justifyContent:'center',}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#000',marginRight:10}}>Yash Dubey</Text>
            <TouchableOpacity onPress={()=>{alert('userEdited')}}>
            <Image
              source={require('../Assets/editPen.png')}
            />
            </TouchableOpacity>
          </View>

          <Text>yashDubey@mail.vinove.com</Text>
        </View>
      
      </View>

      {/* ORDERS */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:15,borderBottomWidth:1,borderTopWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/Orders.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:9}}>Orders</Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Orders')}}>
        <Image style={{marginRight:5}}
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* MY Details */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/MyDetails.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}>MY Details</Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Mydetails')}}>
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* Delivery Address */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/Delicery.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}> Delivery Address</Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Delivery')}}>
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* Payment Methods */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/Payment.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}> Payment Methods </Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Payment')}}>
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* Promo Cord */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/PromoCard.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}>Promo Card</Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Promo')}}>
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* Notifications  */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/Bell.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}>Notifications </Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Notification')}}>
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* Help */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/help.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}>Help</Text>
        </View>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Help')}}>
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      {/* About  */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,borderBottomWidth:1,borderColor:'#E2E2E2',paddingVertical:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
          <Image
            source={require('../Assets/about.png')}
          />
          <Text style={{fontWeight:'500',color:'#000',marginLeft:10}}>About</Text>
        </View>
        <TouchableOpacity
         onPress={()=>{navigation.navigate('About')}}
        >
        <Image
          source={require('../Assets/rightArrow.png')}
        />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      onPress={()=>alert('Logged Out')} 
      style={{backgroundColor:'#f2f3f2',flexDirection:'row',alignItems:'center',paddingVertical:20,marginVertical:40,marginHorizontal:30,paddingHorizontal:10,borderRadius:10}}>
        <Image
          source={require('../Assets/LogOut.png')}
        />
        <Text style={{color:'#53B175',marginLeft:110,fontWeight:'600'}}>Log Out</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})