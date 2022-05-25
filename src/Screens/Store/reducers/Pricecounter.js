import { PRICE_CHANGE } from "../actions/types";

export const INITIAL_STATE = {
  pricecount: 1,
};

const Pricecounter = (state = INITIAL_STATE, { type,payload},actions) => {
  switch (type) {
    case PRICE_CHANGE:
      return {
        ...state,
        pricecount : (state.pricecount+1), payload
      };
    default:
      return state;
  }
};

export default Pricecounter;