import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  
  import React, {useState} from 'react';
  const QtyCounter = () => {
    let [qty, setQty] = useState(0);
    return (
      //  Qty Count
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
              if (qty > 1) {
                  setQty(qty = qty - 1);
              }
          
          }}
          style={{
            justifyContent: 'center',
          }}>
          <Image
            // style={styles.minusImg}
            source={require('../Assets/minus.png')}
          />
        </TouchableOpacity>
        <View style={styles.itemQty}>
          <TextInput
            textAlign={'center'}
            maxLength={2}
          //   value={qty}
          //   onEndEditing={(val) => {
          //     setQty(val);
          //   }}
          >
            {qty}
          </TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            setQty(qty = qty + 1);
          }}
          style={{justifyContent: 'center'}}>
          <Image
            // style={styles.minusImg}
            source={require('../Assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default QtyCounter;
  
  const styles = StyleSheet.create({
    itemQty: {
      borderWidth: 2,
      borderRadius: 10,
      // paddingHorizontal: 10,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#E2E2E2',
    },
  });