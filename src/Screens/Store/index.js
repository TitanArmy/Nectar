import { createStore, applyMiddleware } from "@reduxjs/toolkit";

import reducer from "./reducers";

const configureStore = () => createStore(reducer);

export default configureStore;