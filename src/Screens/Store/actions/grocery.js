import {
    ADD_TO_CART,
    CLEAR_FROM_CART,
    ADD_GROCERY_ITEM,
    REMOVE_FROM_CART,
    REMOVE_GROCERY_ITEM,
    SET_FAVOURITE,
    REMOVE_FAVOURITE,
    INCREMENT_COUNT,
    DECREMENT_COUNT
  } from "../actions/types";
  
  export const addGroceryItem = (id) => {
    return {
      type: ADD_GROCERY_ITEM,
      payload: id,
    };
  };
  
  export const addToCart = (id) => {
    return {
      type: ADD_TO_CART,
      payload: id,
    };
  };
  
  export const removeGroceryItem = (id) => {
    return {
      type: REMOVE_GROCERY_ITEM,
      payload: id,
    };
  };
  
  export const removeFromCart = (id) => {
    return {
      type: REMOVE_FROM_CART,
      payload: id,
    };
  };
  
  export const clearFromCart = (groceryItem) => {
    return {
      type: CLEAR_FROM_CART,
      payload: groceryItem,
    };
  };
  export const addFavourite = (groceryItem) => {
    return {
      type: SET_FAVOURITE,
      payload: groceryItem,
    };
  };
  export const delFavourite = (num) => {
    return {
      type: REMOVE_FAVOURITE,
      payload: num,
    };
  };
  export const increment = (id) => {
    return {
      type: INCREMENT_COUNT,
      payload:id,
    };
  };

  export const decrement = (id) => {
    return {
      type: DECREMENT_COUNT,
      payload:id,
    };
  };
  