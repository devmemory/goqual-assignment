import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import ApiProvider from './provider/ApiProvider'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider>
      <App />
    </ApiProvider>
  </Provider>,
)
