import React from 'react';
import { 
    View,
    Alert
 }  from 'react-native';
import { black, white } from 'react-native-paper/lib/typescript/styles/colors';
import { Rating } from 'react-native-ratings'

const Review = () => {
  return (
    <View style={{marginLeft:270}}>
      <Rating  onFinishRating={(rating)=>{Alert.alert('Star Rating:' + JSON.stringify(rating));}}
      style={{paddingVertical:1}}
      imageSize={20}
      showRating={true}
      />
     
    </View>
  )
}

export default Review