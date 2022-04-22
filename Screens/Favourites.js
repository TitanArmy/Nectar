import { View, Text,FlatList,Image,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Favourites = () => {
  return (
    <ScrollView>
      <View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
      <Text style={{fontWeight:'bold',fontSize:25,color:'#000'}}>Favourites</Text>
      </View>
     <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:10}} 
              source={require('../Assets/pngfuel1.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:43,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:43,color:'#000',}}>325ml, Price</Text>
              </View>
              <Text style={{justifyContent:'center',marginTop:50,marginLeft:87,fontWeight:'bold',color:'#000'}}>$1.50</Text>
             <TouchableOpacity onPress={()=>alert('Coke')}>
                <Image style={{justifyContent:'center',marginTop:50,marginLeft:20}} 
                source={require('../Assets/rightArrow.png')}/>
              </TouchableOpacity>
              
    </View>
    <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:18}} 
              source={require('../Assets/pngfuel.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>355ml, Price</Text>
              </View>
              <Text style={{justifyContent:'center',marginTop:50,marginLeft:90,fontWeight:'bold',color:'#000'}}>$1.99</Text>
              <TouchableOpacity onPress={()=>alert('Coke')}>
                <Image style={{justifyContent:'center',marginTop:50,marginLeft:20}} 
                source={require('../Assets/rightArrow.png')}/>
              </TouchableOpacity>
              
    </View>
    <View style={{flexDirection:'row',right:8}}>
              <Image style={{justifyContent:'center',marginTop:40}} 
              source={require('../Assets/pngfuel3.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>2L, Price</Text>
              </View>
              <Text style={{justifyContent:'center',marginTop:50,marginLeft:83,fontWeight:'bold',color:'#000'}}>$15.50</Text>
              <TouchableOpacity onPress={()=>alert('Coke')}>
                <Image style={{justifyContent:'center',marginTop:50,marginLeft:20}} 
                source={require('../Assets/rightArrow.png')}/>
              </TouchableOpacity>
              
    </View>
    <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:20,}} 
              source={require('../Assets/pngfuel6.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>325ml, Price</Text>
              </View>
              <Text style={{justifyContent:'center',marginTop:50,marginLeft:90,fontWeight:'bold',color:'#000'}}>$4.99</Text>
              <TouchableOpacity onPress={()=>alert('Coke')}>
                <Image style={{justifyContent:'center',marginTop:50,marginLeft:20}} 
                source={require('../Assets/rightArrow.png')}/>
              </TouchableOpacity>
              
    </View>
    <View style={{flexDirection:'row'}}>
              <Image style={{justifyContent:'center',marginTop:40,marginLeft:20}} 
              source={require('../Assets/pngfuel7.png')}
              />
              
              <View>
              <Text style={{justifyContent:'center',marginTop:35,marginLeft:45,fontWeight:'bold',color:'#000'}}>Bell Pepper Red</Text>
              <Text style={{justifyContent:'center',marginTop:0,marginLeft:45,color:'#000',}}>330ml, Price</Text>
              </View>
              <Text style={{justifyContent:'center',marginTop:50,marginLeft:90,fontWeight:'bold',color:'#000'}}>$4.99</Text>
              <TouchableOpacity onPress={()=>alert('Coke')}>
                <Image style={{justifyContent:'center',marginTop:50,marginLeft:20}} 
                source={require('../Assets/rightArrow.png')}/>
              </TouchableOpacity>
              
    </View>

    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginVertical:50,padding:20,backgroundColor:'#53B175',borderRadius:15,marginLeft:20,marginRight:20,flexDirection:'row'}} onPress={()=>{alert('clicked')}} >
                
                <Text style={{color: '#000',fontWeight:'bold',}}>Add All To Cart</Text>
              
            </TouchableOpacity>

      </View>
      </ScrollView>
  )
}

export default Favourites