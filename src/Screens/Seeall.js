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
  
  const data = [
    {
      id: 1,
      pic: require('../Assets/orange.png'),
      name: 'Orange',                                                                                                                                                           
      qty: '1kg',
      price: '40₹',
    },
    {
      id: 2,
      pic: require('../Assets/apple.png'),
      name: 'Apple',
      qty: '2kg',
      price: '80₹',
    },
    {
      id: 3,
      pic: require('../Assets/pineapple.png'),
      name: 'PineApple',
      qty: '500gm',
      price: '55₹',
    },
    {
      id: 4,
      pic: require('../Assets/mango.png'),
      name: 'Mango',
      qty: '1kg',
      price: '70₹',
    },
    {
      id: 5,
      pic: require('../Assets/grape.png'),
      name: 'Grapes',
      qty: '500gm',
      price: '35₹',
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
  const Favourites = () => {
    return (
      <ScrollView>
        <View
          style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        </View>
   
          <FlatList
            data={data}
            renderItem={renderItems}
            keyExtractor={item => item.id}
          />
  
        
  
      </ScrollView>
    );
  };
  
  export default Favourites;
  