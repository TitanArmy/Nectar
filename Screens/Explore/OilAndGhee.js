import { AppRegistry, Text, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import * as React from 'react';

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
};

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return { count: state.count + 1 };
  }
  return state;
};
// Define the initial state of our store
const initialState = { count: 0 };

export default class App extends React.Component {
  // Create a store, passing our reducer function and our initial state
  constructor(props) {
    super(props);
    this.store = createStore(reducer, initialState);
    this.state = {count: 0}
  }

  render() {
    return (
        <TouchableOpacity
          onPress={() => {
            this.updateStore();
                      }}>
          <Text style={{ fontSize: 100 }}>{this.store.getState().count}</Text>
        </TouchableOpacity>
    );
  }

  updateStore() {
    this.store.dispatch({ type: types.INCREMENT });
    this.forceUpdate()
    console.log('update store' + JSON.stringify(this.store.getState()));
  }
}
