import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyApp from '../src/assets/components/calendar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)