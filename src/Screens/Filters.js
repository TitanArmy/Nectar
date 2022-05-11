import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { color } from 'react-native-reanimated';

const Filters = () => {
  const [eggs, setEggs] = useState(false);
  const [noodles, setNoodles] = useState(false)
  const [Chips, setChips] = useState(false)
  const [Fast, setFast] = useState(false)
  const [Individual, setIndividual] = useState(false)
  const [coca, setCoca] = useState(false)
  const [Ifad, setIfad] = useState(false)
  const [Kazi, setKazi] = useState(false)

  return (
    <>
    {/* Categories */}
    <View>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Categories</Text>
      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={eggs}
          onValueChange={newValue => setEggs(newValue)}
        />
        <Text>Eggs</Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={noodles}
          onValueChange={newValue => setNoodles(newValue)}
        />
        <Text>Noodles & Pasta</Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={Chips}
          onValueChange={newValue => setChips(newValue)}
        />
        <Text>Chips & Crisps</Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={Fast}
          onValueChange={newValue => setFast(newValue)}
        />
        <Text>Fast Food</Text>
      </View>
    </View>


    {/* Brand */}
    <View>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Brand</Text>
      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={Individual}
          onValueChange={newValue => setIndividual(newValue)}
        />
        <Text>Individual Collection</Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={coca}
          onValueChange={newValue => setCoca(newValue)}
        />
        <Text>coca cola</Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={Ifad}
          onValueChange={newValue => setIfad(newValue)}
        />
        <Text>Ifad</Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <CheckBox
          style={{height:20,width:30}}
          disabled={false}
          value={Kazi}
          onValueChange={newValue => setKazi(newValue)}
        />
        <Text>Kazi Farmas</Text>
      </View>
    </View>

    {/* BUTTON */}
    <TouchableOpacity 
    style={{justifyContent:'center',alignItems:'center',backgroundColor:'#53B175',padding:15,marginHorizontal:30,borderRadius:10}}
    >
      <Text style={{color:'white'}}>Apply Filters</Text>
    </TouchableOpacity>
    </>
    
  );
};

export default Filters;

const styles = StyleSheet.create({});
