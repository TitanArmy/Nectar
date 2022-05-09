import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  VirtualizedView,refetch,loading,concatData
} from 'react-native';
import { LogBox } from 'react-native';
import React,{useEffect} from 'react';


const numCol = 2;

const WIDTH = Dimensions.get('window').width;

const data = [
  {
    id: 1,
    pic: require('../Assets/vegi2.png'),
    name: 'Fresh Fruits & Vegitable',
    bgColor:'rgba(83, 177, 117, 0.1)',
    bdrgColor: '#53B175'
  },
  {
    id: 2,
    pic: require('../Assets/drinks2.png'),
    name: 'Cooking Oil & Ghee',
    bgColor:'rgba(248, 164, 76, 0.1)',
    bdrgColor: '#F8A44C'
  },
  {
    id: 3,
    pic: require('../Assets/chicken.png'),
    name: 'Meat & Fish',
    bgColor:'rgba(247, 165, 147, 0.25)',
    bdrgColor: '#F7A593'
  },
  {
    id: 4,
    pic: require('../Assets/cookies.png'),
    name: 'Bakery & Snacks',
    bgColor:'rgba(211, 176, 224, 0.25)',
    bdrgColor:'#D3B0E0'
  },
  {
    id: 5,
    pic: require('../Assets/milk.png'),
    name: 'Dairy & Eggs',
    bgColor:'rgba(253, 229, 152, 0.25)',
    bdrgColor: 'rgba(253, 229, 152, 1.00)'
  },
  {
    id: 6,
    pic: require('../Assets/coke.png'),
    name: 'Beverages',
    bgColor:'rgba(183, 223, 245, 0.25)',
    bdrgColor: '#B7DFF5',
  },
  {
    id: 7,
    pic: require('../Assets/milk.png'),
    name: 'milk',
    bgColor:'rgba(131, 106, 246, 0.15)',
    bdrgColor: '#836AF6'
  },
];

const renderItem = ({item}) => {

  return (
    <View style={[styles.stuff,{backgroundColor:item.bgColor,borderColor:item.bdrgColor}]}>
      <TouchableOpacity
        onPress={() => {
          alert('Want To Buy Fruits $ vegitable');
        }}>
        <View>
          <Image source={item.pic} style={styles.Img} />
        </View>
        <View style={{justifyContent:'center', alignItems:'center',marginTop:5}}> 

        <Text style={{fontWeight: '500',fontSize:13,color:'#000'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ExploreDyn = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  
  return (

    <FlatList
      nestedScrollEnabled
      data={data}
      renderItem={renderItem}
      numColumns={numCol}
      showsHorizontalScrollIndicator={false}
      
    />

  );
};

export default ExploreDyn;

const styles = StyleSheet.create({
  stuff: {
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: '#53B175',
    marginVertical: 10,
    marginHorizontal:10,
    backgroundColor: data.bg,
    height: WIDTH / numCol,
    width:'45%',
    padding:10,
  },
  Img:{
    marginTop:10,
    height:'80%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
});
