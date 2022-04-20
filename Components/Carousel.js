import React, {useState, useRef} from 'react';
import {FlatList,Text, View, Dimensions, Image} from 'react-native';


const data = [
  {
    id: 1,
    name: 'React JS',
    pic: require('../Assets/banner.png'),
  },
  {
    id: 2,
    name: 'JavaScript',
    pic: require('../Assets/banner1.png'),
  },
  {
    id: 3,
    name: 'Node JS',
    pic: require('../Assets/banner2.png'),
  },
];

const renderItem = ({item}) => {
  return (
    <View>
      <Image source={item.pic} style={{marginHorizontal:10}} />
    </View>
  );
};

const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        
        keyExtractor={item => item.id}
      />
  );
};

export default App;