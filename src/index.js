import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/pages/App'

import './view/pages/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
