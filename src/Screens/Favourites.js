import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

import { ScrollView } from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import { addGroceryItem } from './Store/actions/grocery';
import counter from  './Store/reducers/countReducer'
const data = [
  {
    id: 1,
    pic: require('../Assets/mango.png'),
    name: 'Sprite Can',
    qty: '325ml',
    price: '4.99',
  },
  {
    id: 2,
    pic: require('../Assets/coke.png'),
    name: 'Diet Coke',
    qty: '325ml',
    price: '4.99',
  },
  {
    id: 3,
    pic: require('../Assets/orange.png'),
    name: 'Apple Juice',
    qty: '1ltr',
    price: 3.01,
  },
  {
    id: 4,
    pic: require('../Assets/pngfuel6.png'),
    name: 'Coca Cola Can',
    qty: '325ml',
    price: 2.99,
  },
  {
    id: 5,
    pic: require('../Assets/pngfuel7.png'),
    name: 'Pepsi Can',
    qty: '325ml',
    price: 2.99,
  },
];

const renderItems = ({item}) => {
  return(
    <ScrollView>

    <View style={{flexDirection: 'row'}}>
      <View style={{marginTop:45,position:'relative',marginLeft:10}}>
      <Image
        style={{height:50,width:50}}
        source={item.pic}
      />
      </View>
      <View>
        <View  style={{justifyContent: 'center',position:'absolute',marginTop:45,marginLeft:30}}>
        <Text
          style={{
            
            
            fontWeight: 'bold',
            color: '#000',
          }}>
          {item.name}
        </Text>
        </View>
        <View style={{position:'absolute',overflow:'hidden',marginTop:65,marginLeft:40}}>
        <Text
          style={{
            justifyContent: 'center',
            color: '#000',
          }}>
          {item.qty}
        </Text>
        </View>
      </View>
      <View style={{marginLeft:200,position:'absolute'}}>
      <Text
        style={{
          justifyContent: 'center',
          marginTop: 50,
          marginLeft: 90,
          fontWeight: 'bold',
          color: '#000',
          marginRight:10
        }}>
        {item.price}
      </Text>
      </View>
      <View style={{marginRight:10,marginLeft:300,position:'absolute'}}>
      <TouchableOpacity onPress={() => alert('Coke')}>
        <Image
          style={{justifyContent: 'center', marginTop: 50, marginLeft: 60}}
          source={require('../Assets/rightArrow.png')}
        />
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
)
};
const Favourites = (props) => {

  const dispatch = useDispatch();
  const {price, title, Img, qty, id,amount} = props;
  const addGroceryItems = useSelector(state => state.groceryReducers.groceryItems);
  const counter = useSelector(state => state.countReducer);
  
  // console.log('fjhgff', addGroceryItems);
  return (
    <ScrollView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#000'}}>
          Favourites
        </Text>
      </View>
 
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 50,
            padding: 20,
            backgroundColor: '#53B175',
            borderRadius: 15,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: 'row',
          }}
          onPress={() =>
            dispatch(
              addGroceryItem({data
                // id: id,
                // Img: Img,
                // title: title,
                // qty: qty,
                // price: price ,
                // amount:amount                                                                             
              }),
            )
          }
         >
          <Text style={{color: '#000', fontWeight: 'bold'}}>
            Add All To Cart
            {price * counter.count}
          </Text>
        </TouchableOpacity>

    </ScrollView>
  );
};

export default Favourites;
