import {
  ADD_TO_CART,
  ADD_GROCERY_ITEM,
  CLEAR_FROM_CART,
  REMOVE_FROM_CART,
  REMOVE_GROCERY_ITEM,
  SET_FAVOURITE,
  REMOVE_FAVOURITE,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from '../actions/types';

export const INITIAL_STATE = {
  amount: 1,
  cart: [],
  groceryItems: [],
  Favourites: [],
};

const groceryReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_GROCERY_ITEM:
      // console.log('weeeeeeeeee========>',payload)
      return {
        ...state,
        groceryItems: state.groceryItems.concat({
          key: Math.random(),

          ...payload,
        }),
      };
    case REMOVE_GROCERY_ITEM:
      return {
        ...state,
        groceryItems: state.groceryItems.filter(item => item.key !== payload),
      };
    // case ADD_TO_CART:
    //   const newCart = {...state.groceryItems};
    //   if (newCart[payload.id]) {
    //     newCart[payload.id]++;
    //   } else {
    //     newCart[payload.id] = 1;
    //   }
    //   return {
    //     ...state,
    //     groceryItems: {...newCart},
    //   };
    // case REMOVE_FROM_CART:
    //   const newCart2 = {...state.cart};
    //   if (newCart2[payload.id]) {
    //     if (newCart2[payload.id] <= 1) {
    //       newCart2[payload.id] = 0;
    //     } else {
    //       newCart2[payload.id]--;
    //     }
    //   } else {
    //     newCart2[payload.id] = 0;
    //   }
    //   return {
    //     ...state,
    //     cart: {...newCart2},
    //   };
    case CLEAR_FROM_CART:
      const newCart3 = {...state.groceryItems};
      if (newCart3[payload]) {
        newCart3[payload.id] = 0;
      }
      return {
        ...state,
        groceryItems: [],
      };
    case SET_FAVOURITE:
      // console.log('weeeeeeeeee========>',payload)
      return {
        ...state,
        Favourites: state.Favourites.concat({
          key: Math.random(),

          ...payload,
        }),
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        Favourites: state.Favourites.filter(item => item.key !== payload),
      };
    case INCREMENT_COUNT:
      // const countId = state.groceryItems.map(item => {
      //   console.log(item.id);
      // });
      // console.log("countId",countId)
      return {
        ...state,

        groceryItems: state.groceryItems.map(item => {
          if (item.id === payload) {
            return {...item, amount: item.amount + 1};
          } else {
            return item;
          }
        }),
        // ...state,
        // item: countId,
      };
    case DECREMENT_COUNT:
      // const countIds = state.groceryItems.find(item => item.id === payload);
      // console.log('countId', item.id);

      return {
        ...state,

        groceryItems: state.groceryItems.map(item => {
          // console.log("GRedux",)
          if (item.amount>1){
            if (item.id === payload) {
              return {...item, amount: item.amount - 1};
            }
            return item;
          }
          else{
            return item
          }
          
        }),
        
      };
    default:
      return state;
  }
};

export default groceryReducer;
