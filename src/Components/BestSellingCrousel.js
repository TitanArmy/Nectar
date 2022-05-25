import React, {useState, useRef,useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import database from '@react-native-firebase/database';
import {LogBox} from "react-native";


const renderItem = ({item}, navigation) => {
  
  if (item.offer == 'BestSelling'){
    return (
      // CARD1111111111111111111111
      <View style={styles.itemCard1}>
        {/* IMG,TITLE,DES */}
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
            });
          }}>
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
          <TouchableOpacity style={styles.itemQtyBtn}>
            <Image source={require('../Assets/plusWhite.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const BestSellingCrousel = ({navigation}) => {
  
  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside"
  ])
  const [data, setData] = useState([])

  useEffect(() => {
    readUserData()
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
      data={data}
      renderItem={item => renderItem(item, navigation)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

export default BestSellingCrousel;

const styles = StyleSheet.create({

    itemCard1: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#E2E2E2',
        marginHorizontal:10
      },
      itemCardImg: {
        alignItems: 'center',
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