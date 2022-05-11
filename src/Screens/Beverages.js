import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Beverages = () => {
  return (
    <>
      {/* ITEM 11111111111111111111111 */}
      <View style={styles.item1}>
        {/* CARD1111111111111111111111 */}
        <View style={styles.itemCard1}>
          <View style={styles.itemCardImg}>
            <Image source={require('../Assets/pngfuel.png')} />
          </View>

          <View style={styles.itemCardDes}>
            <Text style={styles.itemCardHead}>Diet Coke</Text>
            <Text>355ml, Price</Text>
          </View>

          <View style={styles.itemPriceView}>
            <Text style={styles.itemPrice}>$1.99</Text>
            <TouchableOpacity style={styles.itemQtyBtn}>
              <Image source={require('../Assets/plusWhite.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {/* CARD 2222222222222222222222222 */}

        <View style={styles.itemCard1}>
          <View style={styles.itemCardImg}>
            <Image source={require('../Assets/pngfuel1.png')} />
          </View>

          <View style={styles.itemCardDes}>
            <Text style={styles.itemCardHead}>Diet Coke</Text>
            <Text>355ml, Price</Text>
          </View>

          <View style={styles.itemPriceView}>
            <Text style={styles.itemPrice}>$1.99</Text>
            <TouchableOpacity style={styles.itemQtyBtn}>
              <Image source={require('../Assets/plusWhite.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* item 222222222222222222222 */}

      <View style={styles.item2}>
        {/* CARD1111111111111111111111 */}
        <View style={styles.itemCard1}>
          <View style={styles.itemCardImg}>
            <Image source={require('../Assets/pngfuel.png')} />
          </View>

          <View style={styles.itemCardDes}>
            <Text style={styles.itemCardHead}>Diet Coke</Text>
            <Text>355ml, Price</Text>
          </View>

          <View style={styles.itemPriceView}>
            <Text style={styles.itemPrice}>$1.99</Text>
            <TouchableOpacity style={styles.itemQtyBtn}>
              <Image source={require('../Assets/plusWhite.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {/* CARD 2222222222222222222222222 */}

        <View style={styles.itemCard1}>
          <View style={styles.itemCardImg}>
            <Image source={require('../Assets/pngfuel1.png')} />
          </View>

          <View style={styles.itemCardDes}>
            <Text style={styles.itemCardHead}>Diet Coke</Text>
            <Text>355ml, Price</Text>
          </View>

          <View style={styles.itemPriceView}>
            <Text style={styles.itemPrice}>$1.99</Text>
            <TouchableOpacity style={styles.itemQtyBtn}>
              <Image source={require('../Assets/plusWhite.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Beverages;

const styles = StyleSheet.create({
  item1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
  },
  itemCardImg: {
    alignItems: 'center',
    marginVertical: 30,
  },

  itemCardDes: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemCardHead: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  itemPriceView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemPrice: {
    marginVertical: 10,
    marginHorizontal: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemQtyBtn: {
    marginLeft: 70,
    marginRight: 10,
    backgroundColor: '#53B175',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
