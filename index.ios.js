/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux'
import test from './reducer/test.reducer';
import App from './page/app';

const rootReducer = combineReducers({
  test
})

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

export default class DriverRN extends Component {
  render() {
    return (<Provider store={configureStore()}>
         
          <App />

        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DriverRN', () => DriverRN);
