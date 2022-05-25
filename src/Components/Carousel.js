import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

import {LogBox} from "react-native";


const { width } = Dimensions.get('window');

const DATA = [
  {
    id:1,
    coverImageUri: require('../Assets/vanner.png'),
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'GOTY',
    screen:'BakeryAndSnacks'
  },
  {
    id:2,
    coverImageUri: require('../Assets/vanner.png'),
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'NEW',
    screen:'Beverages'
  },
  {
    id:3,
    coverImageUri: require('../Assets/vanner.png'),
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-75%',
    screen:'DiaryAndEgg'
  },
  {
    id:4,
    coverImageUri: require('../Assets/vanner.png'),
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-20%',
    screen:'FruitsAndVeg'
  },
];

const App = ({navigation}) => {
  
  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside"
  ])
  const renderItem = data => (
    <View
      key={data.id}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
       <TouchableOpacity onPress={()=>{navigation.navigate(data.screen, {DATA:DATA})}}>
       <Image
          style={styles.card}
          source={data.coverImageUri}
          
        />
       </TouchableOpacity>
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>
            { data.cornerLabelText }
           
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 1,
    overflow: 'hidden',
  },
  card: {
    // width: width * 0.9,
    // height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    marginRight: 335,
  },
  cornerLabelText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export default App;