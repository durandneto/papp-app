import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import thunkMiddleware from 'redux-thunk';

import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';

import Application from './introduce';

let store = createStore(
  rootReducer
  , applyMiddleware(apiMiddleware, thunkMiddleware)
)



export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
