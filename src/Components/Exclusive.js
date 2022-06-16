import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import {LogBox} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import { addGroceryItem } from '../Screens/Store/actions/grocery';

// const data = [
  //   {
    //     id: 1,
    //     pic: require('../Assets/pngfuel.png'),
    //     name: 'Diet Coke',
    //     qty: '355ml',
//     price: 1.89,
//   },
//   {
//     id: 2,
//     pic: require('../Assets/homebanana.png'),
//     name: 'sprite',
//     qty: '355ml',
//     price: 1.99,
//   },
//   {
  //     id: 3,
  //     pic: require('../Assets/pngfuel1.png'),
//     name: 'Diet Coke',
//     qty: '355ml',
//     price: 1.99,
//   },
// ];


const renderItem = ({item},navigation,dispatch) => {
 
  if (item.offer == 'ExclusiveOffer') {
    return (
      // CARD1111111111111111111111
      <View style={styles.itemCard1}>
        {/* IMG,TITLE,DES */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail', {
              id:item.id,
              Img:item.Img,
              title: item.title,
              category: item.category,
              price: item.price,
              qty: item.qty,
              desc: item.desc,
              offer: item.offer,
            });
          }}>
          <View style={styles.itemCardImg}>
            <Image style={{height: 100, width: 100}} source={{uri: item.Img}} />
            {/* <Text>{item.img}</Text> */}
          </View>

          <View style={styles.itemCardDes}>
            <Text style={styles.itemCardHead}>{item.title}</Text>
            <Text>{item.qty}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.itemPriceView}>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <TouchableOpacity style={styles.itemQtyBtn}
          onPress={() =>
           dispatch(
             addGroceryItem({
               id:item.id,
               Img:item.Img,
               title: item.title,
               price: item.price,
               qty: item.qty                                                                          
            }),
           )
         }
          >
            <Image source={require('../Assets/plusWhite.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const ExclusiveCrousel = ({navigation}) => {

  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside"
  ])
  const [data, setData] = useState([]);

  useEffect(() => {
    readUserData();
  }, []);

  
  const dispatch = useDispatch();
  // const addGroceryItems = useSelector(
  //   state => state.groceryReducers.groceryItems,
  // );

  //ReadUser data from rnFirebase realtime DB
  const readUserData = async () => {
    database()
      .ref('/Data/')
      .on('value', snapshot => {
        //  console.log("data ====>>>",Object.values(snapshot.val()))
        setData(Object.values(snapshot.val()));
      });
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={(item) => renderItem(item, navigation,dispatch)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ExclusiveCrousel;

const styles = StyleSheet.create({
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    marginHorizontal: 10,
  },
  itemCardImg: {
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'center',
    // height:100,
    // width:100,
    // left:30
    // borderWidth:2,
    // backgroundColor:'red',
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
});