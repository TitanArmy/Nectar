import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import Carousel from '../Components/Carousel'
import { dummyData } from '../data/Data'
import { NavigationContainer } from '@react-navigation/native'
import Exclusive from '../Components/Exclusive'
import BestSellingCrousel from '../Components/BestSellingCrousel'
import BehindGroceries from '../Components/BehindGroceries'
import {LogBox} from "react-native";

const HomeScreen = ({navigation}) => {

  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside"
    ])
  return (
    <ScrollView> 

    <View style={styles.container}>
      
      {/* LOGO */}
      <View
       style={{marginTop:10}}
       >
         <TouchableOpacity  onPress={()=>{navigation.navigate('Delivery')}}>
        <Image
          style={{marginHorizontal:180}}
          source={require('../Assets/Group.png')}
        /> 
        </TouchableOpacity>   
      </View>
      
      {/* location */}
      <View>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Delivery')}}>
        {/* <Image  
          style={{marginHorizontal:100}}
          source={require('../Assets/location.png')}
        />     */}
         <Text  style={{fontWeight:'bold',marginLeft:130,marginTop:3,color:'#666666'}}>
          Noida, Sector 126
        </Text>
      </TouchableOpacity>
      </View>
      
      {/* SearchBar */}
      <View style={{ backgroundColor:'#f3f2f3',overflow:'hidden',alignItems:'center',flexDirection:'row',height: 40,width:'95%',borderRadius:10,backgroundColor:'#f2f3f2',marginHorizontal:10,marginVertical:20}}>
      <Image
        style={{justifyContent:'center',alignItems:'center',marginHorizontal:10,}}
        source={require('../Assets/search.png')}
      />
      <TextInput
        style={{flexWrap:'wrap', flex:1,}}
        placeholder="Search Store"
      />
      </View>

      {/* CROUSEL */}
      <View 
      style={{borderWidth:1,borderRadius:10,marginHorizontal:10}}>
      <Carousel navigation={navigation}/>
        {/* <Image
        source={require('../Assets/banner.png')}/> */}
      </View>

      {/* EXCLUSIVE OFFER */}
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,marginVertical:20,alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Exclusive Offer</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Seeall')}}
        >
        <Text style={{color:'#53B175'}}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* ITEM EXCLUSIVE OFFER */}
      <View style={styles.item1}>
          {/* CARD1111111111111111111111 */}
         <Exclusive navigation={navigation}/>
        
      
      </View>

      {/* Best Selling */}
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,marginVertical:20,alignItems:'center'}}>
        <BestSellingCrousel navigation={navigation}/>
      </View>

      
      {/* Groceries */}
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,marginVertical:20,alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Groceries</Text>
        <TouchableOpacity onPress={()=>{alert(' Groceries ')}}>
        <Text style={{color:'#53B175'}}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Grocerie's CARD */}
      <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:15}}>

      {/* ITEM 1111111111 GROCERIES */}
      <View style={{marginBottom:20,flexDirection:'row',alignItems:'center',backgroundColor:'rgba(248, 164, 76, 0.3)',borderRadius:20}}>
        <Image
          source={require('../Assets/pulses.png')}
        />
        <Text style={{marginLeft:10,paddingRight:70}}>Pulses</Text>
      </View>

        {/* ITEM 2222222222 GROCERIES */}
      <View style={{marginBottom:20,flexDirection:'row',alignItems:'center',backgroundColor:'rgba(248, 164, 76, 0.3)',borderRadius:20,paddingVerticle:5}}>
        <Image
          source={require('../Assets/rice.png')}
        />
        <Text style={{marginLeft:10,paddingRight:70}}>Pulses</Text>
      </View>

      </View>

    {/* ITEM AFTER GROCERIES  */}
    <View style={styles.item1}>
         <BehindGroceries navigation={navigation}/>
      </View>


    </View>
    </ScrollView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    // borderWidth:3,
    // borderColor:"red",
    // backgroundColor:'black'
  },
  item1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
  },
  itemCardImg: {
    alignItems: 'center',
    marginVertical: 30,
  },

  itemCardDes: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemCardHead: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  itemPriceView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemPrice: {
    marginVertical: 10,
    marginHorizontal: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemQtyBtn: {
    marginLeft: 70,
    marginRight: 10,
    backgroundColor: '#53B175',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})

