import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Initializer from './Initializer'
import Home from '../containers/Home'

export default () =>
  <Provider store={store}>
    <Initializer>
      <Home />
    </Initializer>
  </Provider>
