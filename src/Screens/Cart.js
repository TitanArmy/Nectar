import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';
import Checkout from './Checkout';
// import Counter from './Counter';
// import { Provider } from 'react-redux';
// import { store } from '../Redux/store';
const data = [
  {
    id: 1,
    pic: require('../Assets/pepper.png'),
    name: 'Bell Pepper Red',
    qty: '1kg',
    price: 4.99,
  },
  {
    id: 2,
    pic: require('../Assets/eggs.png'),
    name: 'Egg Chicken Red',
    qty: '4pcs',
    price: 1.99,
  },
  {
    id: 3,
    pic: require('../Assets/OrganicBanana.png'),
    name: 'Organic Bananas',
    qty: '12Kg',
    price: 3.01,
  },
  {
    id: 4,
    pic: require('../Assets/ginger.png'),
    name: 'Ginger',
    qty: '200gm',
    price: 2.99,
  },
  {
    id: 5,
    pic: require('../Assets/pepper.png'),
    name: 'Bell Pepper Red',
    qty: '1kg',
    price: 4.99,
  },
  {
    id: 6,
    pic: require('../Assets/eggs.png'),
    name: 'Egg Chicken Red',
    qty: '4pcs',
    price: 1.99,
  },
  {
    id: 7,
    pic: require('../Assets/OrganicBanana.png'),
    name: 'Organic Bananas',
    qty: '12Kg',
    price: 3.01,
  },
  {
    id: 8,
    pic: require('../Assets/ginger.png'),
    name: 'Ginger',
    qty: '200gm',
    price: 2.99,
  },
];

const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{justifyContent: 'center', marginTop: 40, marginLeft: 20}}
        source={item.pic}
      />

      <View>
        <Text
          style={{
            justifyContent: 'center',
            marginTop: 35,
            marginLeft: 45,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            marginTop: 0,
            marginLeft: 45,
            color: '#000',
          }}>
          {item.qty}
        </Text>
        <Image
          style={{justifyContent: 'center', marginTop: 28, marginLeft: 45}}
          source={require('../Assets/minus.png')}
        />
        {/* <Image 
              source={require('../Assets/H1.png')}/> */}
        <View style={{justifyContent: 'center', marginTop: -8, marginLeft: 85}}>
          <Text>1</Text>
        </View>
        <Image
          style={{justifyContent: 'center', marginTop: -15, marginLeft: 115}}
          source={require('../Assets/plus.png')}
        />
      </View>
      <Image
        style={{justifyContent: 'center', marginTop: 40, marginLeft: 100}}
        source={require('../Assets/greyCross.png')}
      />
      <Text
        style={{
          justifyContent: 'center',
          marginTop: 90,
          marginLeft: -25,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {item.price}
      </Text>
    </View>
  );
};

const Cart = () => {
  // const [index, setIndex] = useState(0);
  // const isCarousel = useRef(null);
  const [modal, setModal] = useState(false);
  return (
    <ScrollView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
          My Cart
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {/* BUTONNNNNNNNNN */}
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginVertical:40,
              padding: 20,
              backgroundColor: '#53B175',
              borderRadius: 15,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
            }}
            // onPress={()=>{navigation.navigate('OrderAccepted')}}
            onPress={() => setModal(true)}>
            <Text style={{color: '#000', fontWeight: 'bold', marginRight: 70}}>
              Go to Checkout
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>$12.97</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
              setModal(false);
            }}>
            <Checkout closeBtn={setModal} />
          </Modal>
        </View>
      </View>
    </ScrollView>
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
