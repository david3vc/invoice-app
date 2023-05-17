import React from 'react'
import 'bootstrap';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.css'
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
