import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Valid } from './db/db.js'

createRoot(document.getElementById('root')).render(

    <App  data = {Valid}/>

)
