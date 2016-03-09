import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import quizApp from './reducers'
import AppContainer from './containers/AppContainer'

let store = createStore(quizApp)

render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('root')
    )

