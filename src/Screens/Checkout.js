import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

const Checkout = props => {
  const navigation = useNavigation();

  const [data, setData] = useState();
  useEffect(() => {
    readUserData();
  }, []);

  const readUserDatas = useSelector(
    state => state.readUserData,
  );

  const readUserData = async () => {
    database()
      .ref('/Orders/')
      .on('value', snapshot => {
        //  console.log("data ====>>>",Object.values(snapshot.val()))
        setData(Object.values(snapshot.val()));
      });
  };
  console.log(readUserDatas)

  return (
    <View
      style={{
        backgroundColor: '#F2F3F2',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      {/* {/ CHECKOUT /} */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          paddingVertical: 30,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20,color:'#181725'}}>Checkout</Text>
        <TouchableOpacity
          //  onPress={()=>{navigation.navigate('ErrorScreen')}}
          onPress={() => {
            props.closeBtn(false);
          }}>
          <Image source={require('../Assets/cross.png')} />
        </TouchableOpacity>
      </View>

      {/* {/ Delivery /} */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          paddingVertical: 10,
          borderColor: '#e2e2e2',
        }}>
        <Text>Delivery</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'#181725',fontWeight:'bold'}}>Select Method</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
            <Image
              style={{marginLeft: 10}}
              source={require('../Assets/rightArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* {/ Payment /} */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          paddingVertical: 10,
          borderColor: '#e2e2e2',
        }}>
        <Text>Payment</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../Assets/card.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Image
              style={{marginLeft: 10}}
              source={require('../Assets/rightArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* {/ PROMO CODE /} */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          paddingVertical: 10,
          borderColor: '#e2e2e2',
        }}>
        <Text>Promo Code</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'#181725',fontWeight:'bold'}}>Pick Discount</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Promo')}>
            <Image
              style={{marginLeft: 10}}
              source={require('../Assets/rightArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* {/ TOTAL COST /} */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          paddingVertical: 10,
          borderColor: '#e2e2e2',
        }}>
        <Text>Total Cost</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'#181725',fontWeight:'bold'}}>$13.97</Text>
          <Image
            style={{marginLeft: 10}}
            source={require('../Assets/rightArrow.png')}
          />
        </View>
      </View>

      {/* {/ T&C /} */}
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 40,
        }}>
        <Text>By placing an order you agree to our</Text>
        <Text>
          <Text style={{fontWeight: 'bold',color:'#181725'}}>Terms</Text> And{' '}
          <Text style={{fontWeight: 'bold',color:'#181725'}}>Conditions</Text>
        </Text>
      </View>
      <View>
       
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#53B175',
            padding: 15,
            marginHorizontal: 30,
            borderRadius: 10,
            marginVertical: 10,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate('OrderAccepted')}>
          <Text style={{color: 'white'}}> Place Order</Text>
        </TouchableOpacity>
      </View>

      {/* {/ <Filters/> /} */}
    </View>
  );
};



const renderItem =({item}, dispatch) => {
  return(
    <FlatList data={readUserData}
     renderItem={item => renderItem(item, dispatch)}
     keyExtractor={item => item}
    />
  )
}
export default Checkout;

const styles = StyleSheet.create({});
