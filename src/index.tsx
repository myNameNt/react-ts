import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'

import App from './pages/App'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={'/'}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app') as HTMLElement
)