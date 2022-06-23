import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Social = ({navigation}) => {
  return (
    <>
    <View style={{backgroundColor:'white'}}>
     <Image
     source={(require('../../Assets/mask.png'))}
     />
     <Text style={{fontWeight:'bold',fontSize:26,color:'#030303'}}>
         Get Your Groceries 
     </Text>
     <Text style={{fontWeight:'bold',fontSize:26,color:'#030303'}}>
       With Nectar
     </Text>
     <Image style={{alignSelf:'center',marginRight:300,top:45}}
     source={(require('../../Assets/flag.png'))}
     />
    <View>
     <TouchableOpacity
     onPress={()=>{navigation.navigate('Signin')}}
     >
       
     <Image style={{marginLeft:300}}
     source={(require('../../Assets/Arrow.png'))}
     />
     </TouchableOpacity>
     </View>
     <TouchableOpacity style={{backgroundColor: '#5383EC',alignItems:'center',margin:30,marginTop:40,borderRadius:20,height:57}}
     >
        
        <Text style={{color:'#FCFCFC',fontSize:20,textAlign:'center',marginTop:15}}>
            Continue With Google
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#4A66AC',alignItems:'center',marginTop:10,margin:30,borderRadius:20,height:57}}
     >
        
        <Text style={{color:'#FCFCFC',fontSize:20,textAlign:'center',marginTop:15}}>
            Continue With FaceBook
        </Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Social