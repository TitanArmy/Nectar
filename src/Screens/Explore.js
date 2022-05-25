
import { View, Text,Image,TouchableOpacity,SafeAreaView ,TextInput,FlatList} from 'react-native'
import React from 'react'
// import { List, TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native-virtualized-view';
import ExploreDyn from '../Components/ExploreDyn'
const Explore = ({navigation}) => {
  return (
      <ScrollView>
        <Text style={{textAlign:'center', fontSize:30, color:'#181725',marginTop: 15,fontWeight:'bold'}}>Find Product</Text>
      
      <View style={{ backgroundColor:'#f3f2f3',overflow:'hidden',marginTop:13,alignItems:'center',flexDirection:'row',height: 59,width:'95%',borderRadius:10,marginHorizontal:10}}>
      <Image
        style={{justifyContent:'center',alignItems:'center',marginHorizontal:10,}}
        source={require('../Assets/search.png')}
      />
      <TextInput
        style={{flexWrap:'wrap', flex:1,backgroundColor:'#F2F3F2'}}
        placeholder="Search Store"
        autoCorrect={false}
        underlineColorAndroid="transparent"
       
      />
      </View>

      <View>
        <ExploreDyn navigation={navigation}/>
      </View>

    </ScrollView>
      
  )
}

export default Explore