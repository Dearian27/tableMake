import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfiguratorProvider } from './contexts/Configurator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfiguratorProvider>
    <App />
  </ConfiguratorProvider>
)
