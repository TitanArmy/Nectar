import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {LogBox} from "react-native";

import {useSelector, useDispatch} from 'react-redux';
import { addGroceryItem } from '../Screens/Store/actions/grocery';

import database from '@react-native-firebase/database';


// const data = [
  //   {
    //     id: 1,
  //     pic: require('../Assets/BoilChicken.png'),
  //     name: 'Boiler Chicken',
  //     qty: '1kg',
  //     price: '4.99',
  //     color:'#234455'
  //   },
  //   {
  //     id: 2,
  //     pic: require('../Assets/pngfuel1.png'),
  //     name: 'sprite',
  //     qty: '355ml',
  //     price: 1.99,
  //     color:'red'
  //   },
  //   {
  //     id: 3,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  //   {
    //     id: 4,
    //     pic: require('../Assets/pngfuel.png'),
    //     name: 'Diet Coke',
    //     qty: '355ml',
    //     price: 1.339,
    //   },
    //   {
      //     id: 5,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  //   {
    //     id: 6,
    //     pic: require('../Assets/pngfuel.png'),
    //     name: 'Diet Coke',
    //     qty: '355ml',
    //     price: 1.339,
    //   },
    //   {
      //     id: 7,
      //     pic: require('../Assets/pngfuel.png'),
      //     name: 'Diet Coke',
      //     qty: '355ml',
      //     price: 1.339,
      //   },
      // ];
      
      
      const numCol = 2;
      const WIDTH = Dimensions.get('window').width - 30;
      
      const renderItem = ({item}, navigation,dispatch) => {
        return (
          // CARD1111111111111111111111
          <View style={styles.itemCard1}>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', {
              Img:item.Img,
              title: item.title,
              category: item.category,
              price: item.price,
              qty: item.qty,
              desc: item.desc,
              offer: item.offer,
              amount:item.amount
            });
          }}
          >
        <View style={styles.itemCardImg}>
        <Image 
        style={{ height:100,width:100,}}
        source={{uri:item.Img}} 
        />
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
            amount:item.amount,
              Img:item.Img,
          title: item.title,
              price: item.price ,
              qty:item.qty                                                                           
           }),
          )
        }
        >
          <Image source={require('../Assets/plusWhite.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BehindGroceries = ({navigation}) => {

  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside"
  ])
  
  const [data, setData] = useState([])
  const dispatch = useDispatch();

    useEffect(() => {
      readUserData() 
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
        
      }, [])
    
      //ReadUser data from rnFirebase realtime DB
  const readUserData = async () => {
    database().ref('/Data/')
    .on('value', snapshot => {
    //  console.log("data ====>>>",Object.values(snapshot.val()))
    setData(Object.values(snapshot.val()))
   });
   };

  return (
    <FlatList
      nestedScrollEnabled
      data={data}
      renderItem={item => renderItem(item, navigation,dispatch)}
      numColumns={numCol}
      keyExtractor={item => item.id}
    />
  );
};

export default BehindGroceries;

const styles = StyleSheet.create({
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    marginHorizontal: 7,
    marginVertical: 10,
    width: WIDTH / numCol,
  },
  itemCardImg: {
    marginVertical: 30,
    alignItems:'center',
    justifyContent:'center',
    // height:60,
    // width:100,
    // borderWidth:2,
    // backgroundColor:'red',
    // left:30
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
    marginLeft: 60,
    marginRight: 10,
    backgroundColor: '#53B175',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});