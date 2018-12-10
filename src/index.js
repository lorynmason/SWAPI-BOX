import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Component/App/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

const router = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'))

serviceWorker.unregister()
