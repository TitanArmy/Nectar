import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      {/* Items */}
      <View style={styles.itemImg}>
        <Image source={require('../Assets/itemApple.png')} />
      </View>

      {/* Item Title */}
      <View style={styles.itemTitle}>
        <View>
          <Text style={styles.itemTitleTxt}>Natural Red Apple</Text>
          <Text>1kg, Price</Text>
        </View>
        <Image
          style={styles.centerView}
          source={require('../Assets/heart.png')}
        />
      </View>

      {/* Rate */}
      <View style={styles.itemRateCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={styles.minusImg}
            source={require('../Assets/minus.png')}
          />
          <View style={styles.itemQty}>
            <Text>1</Text>
          </View>
          <Image
            style={styles.plusImg}
            source={require('../Assets/plus.png')}
          />
        </View>
        <Text style={styles.itemRate}>$4.99</Text>
      </View>

      {/* Item Detail */}
      <View style={styles.itemDetailCard}>
        <Text style={styles.productDetail}>Product Detail</Text>
        <Image source={require('../Assets/downArrow.png')} />
      </View>

      <View style={styles.productDetailDesc}>
        <Text>
          Apples are nutritious. Apples may be good for weight loss. apples may
          be good for your heart. As part of a healtful and varied diet.
        </Text>
      </View>

      <View style={styles.nutritionCard}>
        <Text style={styles.nutrition}>Nutritions</Text>
        <Image source={require('../Assets/rightArrow.png')} />
      </View>

      <View style={styles.reviewCard}>
        <Text style={styles.review}>Review</Text>
        <View style={styles.star}>
          <Image source={require('../Assets/star.png')} />
          <Image source={require('../Assets/star.png')} />
          <Image source={require('../Assets/star.png')} />
          <Image source={require('../Assets/star.png')} />
          <Image source={require('../Assets/star.png')} />
          <Image
            style={styles.lastStar}
            source={require('../Assets/rightArrow.png')}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.basketBtn}>
        <Text style={styles.basketBtnTxt}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  itemImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderEndWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  itemTitleTxt: {color: '#000', fontSize: 20, fontWeight: 'bold'},
  centerView: {alignItems: 'center', justifyContent: 'center'},
  itemRateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  itemQty: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderColor: '#E2E2E2',
  },
  minusImg: {marginVertical: 20},
  plusImg: {marginVertical: 10},
  itemRate: {marginVertical: 10},
  itemDetailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  productDetail: {color: '#000', fontSize: 15, fontWeight: '500'},
  productDetailDesc: {marginHorizontal: 15, marginVertical: 10},
  nutritionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 30,
  },
  nutrition: {color: '#000', fontSize: 15, fontWeight: '500'},
  reviewCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  review: {color: '#000', fontSize: 15, fontWeight: '500'},
  star: {flexDirection: 'row'},
  lastStar: {marginLeft: 20},
  basketBtn: {
    backgroundColor: '#53B175',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 25,
  },
  basketBtnTxt: {color: '#fff'},
});
