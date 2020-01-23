import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './store/reducers'
import AppContainer from './container/app-container'

import '../scss/app.scss'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#root')
)
