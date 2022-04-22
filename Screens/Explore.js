// import { View, Text,Image,TouchableOpacity,SafeAreaView ,TextInput} from 'react-native'
// import React from 'react'
// // import { List, TextInput } from 'react-native-paper'
// import { ScrollView } from 'react-native-gesture-handler'
// const Explore = () => {

//     Alert = () => {
//         alert('saveIconn')
//        }
//   return (
//       <SafeAreaView>


//     <View >
//       <Text style={{textAlign:'center', fontSize:30, color:'#181725',marginTop: 15,fontWeight:'bold'}}>Find Product</Text>
      
//       <View style={{ backgroundColor:'#f3f2f3',overflow:'hidden',marginTop:13,alignItems:'center',flexDirection:'row',height: 59,width:'95%',borderRadius:10,backgroundColor:'white',marginHorizontal:10,marginVertical:20}}>
//       <Image
//         style={{justifyContent:'center',alignItems:'center',marginHorizontal:10,}}
//         source={require('../Assets/search.png')}
//       />
//       <TextInput
//         style={{flexWrap:'wrap', flex:1,backgroundColor:'#bddbbd'}}
//         placeholder="Search Store"
//         autoCorrect={false}
//         underlineColorAndroid="transparent"
       
//       />
//       </View>
//       <View>
//     <ScrollView>

//   <View></View>
//     <TouchableOpacity  
//     style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#53B175',marginHorizontal:110,marginVertical:24,right:100,backgroundColor:'rgba(83, 177, 117, 0.1)' ,}}
//     onPress={()=>{alert('Want To Buy Fruits $ vegitable')}}>
        
//     <Image source={require('../Assets/vegi2.png')} style={{width:170}}/>
//     <View style={{}}>
//         <Text style={{marginLeft:23,fontWeight:'bold'}}>
//             Fresh Fruits And Vegitable
//         </Text> 
//         </View>
//     </TouchableOpacity>



//     <TouchableOpacity  
//     style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,marginHorizontal:197,bottom:211,borderColor:'#F8A44C',marginRight:23,flexWrap:'wrap-reverse',backgroundColor:'rgba(248, 164, 76, 0.1)'}}
//     onPress={()=>{alert('jhell')}}>
        
//     <Image source={require('../Assets/drink2.png')} style={{width:170,height:166}}/>
//     <View style={{}}>
//         <Text style={{marginLeft:17,fontWeight:'bold'}}>
//             Cooking Oil And Ghee
//         </Text> 
//         </View>
//     </TouchableOpacity>


//     <TouchableOpacity  
//     style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#F7A593',marginHorizontal:110,marginVertical:35,right:100,bottom:220,backgroundColor:'rgba(247, 165, 147, 0.25)'}}
//     onPress={()=>{alert('jhell')}}>
        
//     <Image source={require('../Assets/chicken.png')} style={{width:170}}/>
//     <View style={{}}>
//         <Text style={{marginLeft:33,fontWeight:'bold'}}>
//             Meat And Fish
//         </Text> 
//         </View>
//     </TouchableOpacity>


//     <TouchableOpacity  
//     style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#D3B0E0',marginHorizontal:196,marginRight:23,bottom:420,flexWrap:'wrap-reverse',backgroundColor:'rgba(211, 176, 224, 0.25)'}}
//     onPress={()=>{alert('jhell')}}>
        
//     <Image source={require('../Assets/cookies.png')} style={{width:170,height:143}}/>
//     <View style={{}}>
//         <Text style={{marginLeft:30,fontWeight:'bold'}}>
//             Bakery And Snacks
//         </Text> 
//         </View>
//     </TouchableOpacity>



//     <TouchableOpacity  
//     style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#FDE598',marginHorizontal:110,marginVertical:50,right:100,bottom:440,backgroundColor:'rgba(253, 229, 152, 0.25)'}}
//     onPress={()=>{alert('jhell')}}>
        
//     <Image source={require('../Assets/milk.png')} style={{width:170}}/>
//     <View style={{}}>
//         <Text style={{marginLeft:43,fontWeight:'bold'}}>
//     Dairy And Eggs
//         </Text> 
//         </View>
//     </TouchableOpacity>

//     <TouchableOpacity  
//     style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#B7DFF5',marginHorizontal:195,marginRight:20,bottom:645,flexWrap:'wrap-reverse',backgroundColor:'rgba(183, 223, 245, 0.25)'}}
//     onPress={()=>{alert('jhell')}}>
        
//     <Image source={require('../Assets/coke.png')} style={{width:175,height:135}}/>
//     <View style={{}}>
//         <Text style={{marginLeft:25,fontWeight:'bold'}}>
//            Beverages
//         </Text> 
//         </View>
//     </TouchableOpacity>

    
//     </ScrollView>

//     </View>
//     </View>
//     </SafeAreaView>
      
//   )
// }

// export default Explore


import { View, Text,Image,TouchableOpacity,SafeAreaView ,TextInput} from 'react-native'
import React from 'react'
// import { List, TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
const Explore = () => {

    Alert = () => {
        alert('saveIconn')
       }
  return (
      <SafeAreaView>


    <View >
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
    <ScrollView>

  <View></View>
    <TouchableOpacity  
    style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#53B175',marginHorizontal:110,marginVertical:24,right:100,backgroundColor:'rgba(83, 177, 117, 0.1)' ,}}
    onPress={()=>{alert('Want To Buy Fruits $ vegitable')}}>
        
    <Image source={require('../Assets/vegi2.png')} style={{width:170}}/>
    <View style={{}}>
        <Text style={{marginLeft:23,fontWeight:'bold'}}>
            Fresh Fruits And Vegitable
        </Text> 
        </View>
    </TouchableOpacity>



    <TouchableOpacity  
    style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,marginHorizontal:197,bottom:211,borderColor:'#F8A44C',marginRight:23,flexWrap:'wrap-reverse',backgroundColor:'rgba(248, 164, 76, 0.1)'}}
    onPress={()=>{alert('Wants To Buy Some Cooking Oil & Ghee')}}>
        
    <Image source={require('../Assets/drinks2.png')} style={{width:170,height:166}}/>
    <View style={{}}>
        <Text style={{marginLeft:17,fontWeight:'bold'}}>
            Cooking Oil And Ghee
        </Text> 
        </View>
    </TouchableOpacity>


    <TouchableOpacity  
    style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#F7A593',marginHorizontal:110,marginVertical:35,right:100,bottom:220,backgroundColor:'rgba(247, 165, 147, 0.25)'}}
    onPress={()=>{alert('Buy Fresh Meats')}}>
        
    <Image source={require('../Assets/chicken.png')} style={{width:170}}/>
    <View style={{}}>
        <Text style={{marginLeft:33,fontWeight:'bold'}}>
            Meat And Fish
        </Text> 
        </View>
    </TouchableOpacity>


    <TouchableOpacity  
    style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#D3B0E0',marginHorizontal:196,marginRight:23,bottom:420,flexWrap:'wrap-reverse',backgroundColor:'rgba(211, 176, 224, 0.25)'}}
    onPress={()=>{alert('Bought Some Bakery & Snacks For Your Family')}}>
        
    <Image source={require('../Assets/cookies.png')} style={{width:170,height:143}}/>
    <View style={{}}>
        <Text style={{marginLeft:30,fontWeight:'bold'}}>
            Bakery And Snacks
        </Text> 
        </View>
    </TouchableOpacity>



    <TouchableOpacity  
    style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#FDE598',marginHorizontal:110,marginVertical:50,right:100,bottom:440,backgroundColor:'rgba(253, 229, 152, 0.25)'}}
    onPress={()=>{alert('Dairy & Eggs for Protein')}}>
        
    <Image source={require('../Assets/milk.png')} style={{width:170}}/>
    <View style={{}}>
        <Text style={{marginLeft:43,fontWeight:'bold'}}>
    Dairy And Eggs
        </Text> 
        </View>
    </TouchableOpacity>

    <TouchableOpacity  
    style={{borderBottomRightRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderWidth:1,borderColor:'#B7DFF5',marginHorizontal:195,marginRight:20,bottom:645,flexWrap:'wrap-reverse',backgroundColor:'rgba(183, 223, 245, 0.25)'}}
    onPress={()=>{alert('Lets have some Chilled Coked')}}>
        
    <Image source={require('../Assets/coke.png')} style={{width:175,height:135}}/>
    <View style={{}}>
        <Text style={{marginLeft:25,fontWeight:'bold'}}>
           Beverages
        </Text> 
        </View>
    </TouchableOpacity>

    
    </ScrollView>

    </View>
    </View>
    </SafeAreaView>
      
  )
}

export default Explore