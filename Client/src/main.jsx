import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'//Convierte todo lo que hago en React a Redux
import store from './redux/store'

import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'//Se importa para hacer router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/*El provider traduce lo que hago en React a Redux */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
)
