import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeContext} from './utility/context/ThemeColors'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store.js'

const LazyApp = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <ThemeContext>
          <LazyApp />
        </ThemeContext>
    </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)
