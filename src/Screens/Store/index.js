import { createStore, applyMiddleware,combineReducers } from "@reduxjs/toolkit";
import reducer from "./reducers";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const RootReducers = combineReducers({
    // reducers
    reducer,
  });
  const persistedReducer = persistReducer(persistConfig, reducer)
  
  export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor,thunk }
  }


