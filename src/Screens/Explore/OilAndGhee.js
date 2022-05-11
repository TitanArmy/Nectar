import { View, Text,Button } from 'react-native'
import React,{useState, useEffect} from 'react'



function  OilAndGhee() {
const [count, setCount] = useState(6)


useEffect(()=>{
  console.log("Test Use Effects",count)
})

  return (
    <View style={{flex:1,marginTop:100}}>
      <Text style={{fontSize:70}}>{count}</Text>
      <Button title="add Me" onPress={()=>{setCount(count+1)}}
      />
    </View>
  )
}

export default OilAndGhee
