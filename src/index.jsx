import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(
  reducers, //reducers from app
  {},
  applyMiddleware(reduxThunk) // initial state
);

const container = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
 container)


