import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/types";

export const increment = (id) => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT_COUNT,
  };
};