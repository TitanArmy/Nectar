import { ADD_TO_FAV } from "../actions/types";

export const INITIAL_STATE = {
    FavReducer: 1,
};

const FavReducer = (state = ADD_TO_FAV, { type,payload},actions) => {
  switch (type) {
    case ADD_TO_FAV:
      return {
        ...state,
        pricecount : (state.pricecount+1), payload
      };
    default:
      return state;
  }
};

export default FavReducer;