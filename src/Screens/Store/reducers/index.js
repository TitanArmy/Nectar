import { combineReducers } from "@reduxjs/toolkit";

import groceryReducer from "./groceryReducer";
import flagsReducer from "./flagsReducers.";
import countReducer from "./countReducer";
import Pricecounter from "./Pricecounter";

const reducer = combineReducers({
  groceryReducers: groceryReducer,
  countReducer: countReducer,
  flagsState: flagsReducer,
  Pricecounter : Pricecounter
});

export default reducer;