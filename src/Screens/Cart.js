import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
  ToastAndroid
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './Checkout';
import QtyCounter from '../Components/QtyCounter';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToCart,
  addGroceryItem,
  removeGroceryItem,
  clearFromCart,
} from './Store/actions/grocery';
import {
  increment,
  DECREMENT_COUNT,
  decrement,
} from '../Screens/Store/actions/grocery';
import counter from './Store/reducers/countReducer';
import {LogBox} from 'react-native';



const Cart = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
 
  const showToast =() =>{
    try{
    ToastAndroid.showWithGravity(
      'Happy to See Myself On Top',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
     
    );
    }catch(err){
      console.log(err);

    }
  };
 
  const addtoBasketCounter = useSelector(
    state => state.groceryReducers.groceryItems,
  );
  
  // console.log('cart Data=====>', JSON.stringify(addtoBasketCounter));
  

  const renderItem = (cartItem ) => {
    console.log('item rednder cart', cartItem);
  const item=cartItem.item;
   
 
  
  
    return (
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              justifyContent: 'center',
              marginTop: 40,
              marginLeft: 20,
              width: 70,
              height: 55,
            }}
            source={{uri: item.Img}}
          />
  
          <View>
            <View>
              <Text
                style={{
                  justifyContent: 'center',
                  marginTop: 35,
                  marginLeft: 45,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                justifyContent: 'center',
                marginTop: 0,
                marginLeft: 45,
                color: '#000',
              }}>
              {item.qty}
            </Text>
            <View
              style={{
                marginRight: 50,
                marginLeft: 40,
                flexDirection: 'row',
                marginTop: 30,
              }}>
              {/* <QtyCounter/> */}
              <TouchableOpacity onPress={() => dispatch(decrement(item.id))}>
                <Image source={require('../Assets/minus.png')} />
              </TouchableOpacity>
              <Text style={{margin: 20, alignItems: 'center', marginTop:-5}}>
              {item.amount}
              </Text>
  
              <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <Image 
                style={{marginVertical:-5}}
                source={require('../Assets/plus.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginLeft: 370, position: 'absolute'}}>
            <Text
              style={{
                justifyContent: 'center',
                marginTop: 90,
                marginLeft: -25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              ${item.price *item.amount}
            </Text>
          </View>
          <View style={{position: 'absolute', marginLeft: 350, marginTop: 40}}>
            <TouchableOpacity
              onPress={() => dispatch(removeGroceryItem(item.id))}>
              <Image style={{}} source={require('../Assets/cross.png')} />
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    );
  };
  

  return (
    // <ScrollView>
    <View style={{marginBottom: 300}}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 125,
          }}>
          My Cart
        </Text>
        
        <TouchableOpacity
          style={{marginTop: 5, marginRight: -10}}
          onPress={() => dispatch(clearFromCart())}>
          {/* <Image
            style={{width: 25, height: 25}}
            source={require('../Assets/bin.png')}></Image> */}
            <Text>
              All CLEAR
            </Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={addtoBasketCounter}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id}
          // onRefresh={}
        />
        {/* BUTONNNNNNNNNN */}
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 20,
              padding: 20,
              backgroundColor: '#53B175',
              borderRadius: 15,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              marginBottom: 20,
            }}
            // onPress={()=>{navigation.navigate('OrderAccepted')}}
            onPress={() => setModal(true,showToast())}>
              

        
            <Text style={{color: '#000', fontWeight: 'bold', marginRight: 90}}>
              Go to Checkout
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
           
            </Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
              setModal(false);
            }}>
             <Checkout closeBtn={setModal}  /> 
          </Modal>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});