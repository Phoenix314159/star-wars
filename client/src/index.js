import React from 'react';
import ReactDOM from 'react-dom';
import Total from './containers/Total';
import './styles/index.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import initialState from './utilities/initialState'
const store = createStore(reducers, initialState, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Total />
  </Provider>, document.getElementById('root'))
