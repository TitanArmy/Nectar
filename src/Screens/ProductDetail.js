import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {Provider} from 'react-native-paper';
import {
  increment,
  DECREMENT_COUNT,
  decrement,
} from '../Screens/Store/actions/counters';
import {Button} from 'react-native-paper';
import counter from './Store/reducers/countReducer';
import {Pricecounter} from '../Screens/Store/reducers/Pricecounter';
import {
  addToCart,
  groceryReducer,
  addGroceryItem,
} from './Store/actions/grocery';
import {ADD_TO_CART} from './Store/actions/types';
import Cart from './Cart';
import {LogBox} from 'react-native';

const ProductDetail = props => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'Warning: Encountered two children with the same key ',
    ]);
  }, []);

  const dispatch = useDispatch();
  const [Favourite, setFavourite] = useState();
  const counter = useSelector(state => state.countReducer);
  const Pricecounters = useSelector(state => state.Pricecounter);
  const {price, title, Img, qty, id,amount} = props.route.params;
  const addGroceryItems = useSelector(state => state.groceryReducers.groceryItems);
  const clearFromCarts = useSelector(state => state.groceryReducers.groceryItems)
  const favouritess=useSelector(state=>state.groceryReducers)
  // console.log('HHHHIIIIIII------', addGroceryItems);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Items */}
        <View style={styles.itemImg}>
        <Image
              style={{height: 100, width: 100}}
              source={
                {uri: Img}
                // require('../Assets/itemApple.png')
              }
              />
        </View>

        {/* Item Title */}
        <View style={styles.itemTitle}>
          <View>
            <Text style={styles.itemTitleTxt}>{title}</Text>
            <Text>{qty}</Text>
          </View>
          <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setFavourite(!Favourite);
          
              }}>
              {Favourite ? (
                <Image
                  style={styles.centerView}
                  source={require('../Assets/broken.png')}
                />
              ) : (
                <Image
                  style={styles.centerView}
                  source={require('../Assets/heart.png')} 
                />
              )}
            </TouchableOpacity>
        </View>

        {/* Rate */}
        <View style={styles.itemRateCard}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  decrement({
                    Img: Img,
                    title: title,
                    qty: qty,
                    price: price,
                    amount:amount
                  }),
                )
              }>
              <Image source={require('../Assets/minus.png')} />
            </TouchableOpacity>
            <Text style={{marginLeft: 10, bottom: 7}}>{counter.count}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  increment({
                    Img: Img,
                    title: title,
                    qty: qty,
                    price: price,
                    amount:amount

                  }),
                )
              }>
              <Image
                style={{marginLeft: 8, bottom: 7}}
                source={require('../Assets/plus.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.itemRate}> ₹{price * counter.count}</Text>
        </View>

        {/* Item Detail */}
        <View style={styles.itemDetailCard}>
          <Text style={styles.productDetail}>Product Detail</Text>
          <Image source={require('../Assets/downArrow.png')} />
        </View>

        <View style={styles.productDetailDesc}>
          <Text>
            Apples are nutritious. Apples may be good for weight loss. apples
            may be good for your heart. As part of a healtful and varied diet.
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

        <TouchableOpacity
          style={styles.basketBtn}
          onPress={() =>
            dispatch(
              addGroceryItem({
                Img: Img,
                title: title,
                qty: qty,
                price: price ,
                amount:amount
              }),
            )
          }>
          <Text style={styles.basketBtnTxt}>
            Add To Basket ₹ {price * counter.count}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
