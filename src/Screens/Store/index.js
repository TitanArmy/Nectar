import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)
  
  export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }

// const configureStore = () => createStore(reducer);

// export default configureStore;