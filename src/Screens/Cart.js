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
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-virtualized-view';
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
} from '../Screens/Store/actions/counters';
import counter from './Store/reducers/countReducer';
import {LogBox} from 'react-native';

const data = [
  {
    id: 1,
    Img: require('../Assets/pepper.png'),
    title: 'Bell Pepper Red',
    qty: '1kg',
    price: 4.99,
  },
  {
    id: 2,
    Img: require('../Assets/eggs.png'),
    title: 'Egg Chicken Red',
    qty: '4pcs',
    price: 1.99,
  },
  {
    id: 3,
    Img: require('../Assets/OrganicBanana.png'),
    title: 'Organic Bananas',
    qty: '12Kg',
    price: 3.01,
  },
  {
    id: 4,
    Img: require('../Assets/ginger.png'),
    title: 'Ginger',
    qty: '200gm',
    price: 2.99,
  },
  {
    id: 5,
    Img: require('../Assets/eggs.png'),
    title: 'Egg Chicken Red',
    qty: '4pcs',
    price: 1.99,
  },
  {
    id: 6,
    Img: require('../Assets/OrganicBanana.png'),
    title: 'Organic Bananas',
    qty: '12Kg',
    price: 3.01,
  },
  {
    id: 7,
    Img: require('../Assets/ginger.png'),
    title: 'Ginger',
    qty: '200gm',
    price: 2.99,
  },
];

const renderItem = ({item}, dispatch, counter) => {
  console.log(counter, 'fhidvhuirhfcr');
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
          <View style={{position: 'relative', marginRight: 50, marginLeft: 40}}>
            {/* <QtyCounter /> */}
            <TouchableOpacity onPress={() => dispatch(decrement())}>
              <Image
                style={{bottom: -10, right: 3}}
                source={require('../Assets/minus.png')}
              />
            </TouchableOpacity>
            <Text style={{marginLeft: 22, bottom: 2}}>{counter.count}</Text>
            <TouchableOpacity onPress={() => dispatch(increment())}>
              <Image
                style={{marginLeft: 38, bottom: 20}}
                source={require('../Assets/plus.png')}
              />
            </TouchableOpacity>
            {/* <Text style={styles.itemRate}> ₹{item.price * counter.count}</Text> */}
          </View>
        </View>
        <View style={{marginLeft: 370, position: 'absolute'}}>
          <Text
            style={{
              justifyContent: 'center',
              marginTop: 90,
              marginLeft: -36,
              fontWeight: 'bold',
              color: '#000',
            }}>
            ₹{item.price * counter.count}
          </Text>
        </View>
        <View style={{position: 'absolute', marginLeft: 350, marginTop: 40}}>
          <TouchableOpacity
            onPress={() => dispatch(removeGroceryItem(item.key))}>
            <Image
              style={{uri: item.Img}}
              source={require('../Assets/cross.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Cart = ({item}, props) => {
  // const [index, setIndex] = useState(0);
  // const isCarousel = useRef(null);

  useEffect(() => {
    LogBox.ignoreLogs([
      'Warning: Failed prop type: Invalid props.style key `uri` supplied to `Image`',
    ]);
  }, []);
  useEffect(() => {
    LogBox.ignoreLogs([
      'Warning: Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates',
    ]);
  }, []);

  const counter = useSelector(state => state.countReducer);
  const {price, id, Img, title, qty} = props;
  const dispatch = useDispatch();
  const addGroceryItems = useSelector(
    state => state.groceryReducers.groceryItems,
  );
  const removeGroceryItem = useSelector(
    state => state.groceryReducers.groceryItems,
  );
  const clearFromCarts = useSelector(
    state => state.groceryReducers.groceryItems,
  );
  console.log('ffhfhfh', clearFromCarts);
  // console.log("cart item>>>>>>>>>>>>>>>>>>" ,Cartssss)

  const [modal, setModal] = useState(false);
  return (
    <ScrollView>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
            My Cart
          </Text>
          <TouchableOpacity onPress={() => dispatch(clearFromCart())}>
            <Text style={{color: '#000', left: 150}}>All CLEAR</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={addGroceryItems}
            renderItem={item => renderItem(item, dispatch, counter)}
            keyExtractor={item => item}
          />
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
              onPress={() => setModal(true)}>
              <Text
                style={{color: '#000', fontWeight: 'bold', marginRight: 70}}>
                Go to Checkout
              </Text>
              <Text style={{color: '#000', fontWeight: 'bold'}}>
                {' '}
                ₹ {price * addGroceryItems}
              </Text>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              onRequestClose={() => {
                setModal(true);
              }}>
              <Checkout closeBtn={setModal} />
            </Modal>
          </View>
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
