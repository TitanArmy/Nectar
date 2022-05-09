import { View, Text,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'


const numCol = 2;

const WIDTH = Dimensions.get('window').width;
const data =[
  {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true
  },
]


const renderItem = ({item}) => {
  return (
   <View style={{alignSelf:'center'}}>
     <Text>
     {item.id}
     </Text>
      <Text>
        {item.title}
      </Text>
   </View>
  )
}


const Orders =()=>
{
  return (
    <FlatList
    nestedScrollEnabled
    data={data}
    renderItem={renderItem}
    showsHorizontalScrollIndicator={false}
    />
  )
}

export default Orders

// const styles = StyleSheet.create({
//   stuff: {
//     borderRadius: 20,
//     borderWidth: 1,
//     // borderColor: '#53B175',
//     marginVertical: 10,
//     marginHorizontal:10,
//     backgroundColor: data.bg,
//     height: WIDTH / numCol,
//     width:'45%',
//     padding:10,
//   },
//   Img:{
//     marginTop:10,
//     height:'80%',
//     width:'100%',
//     justifyContent:'center',
//     alignItems:'center',
//     alignSelf:'center'
//   },
// });