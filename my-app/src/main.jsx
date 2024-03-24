import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

const blogtitle = "blog 1"
const navbar = [
  {link:"#", linkText:"Home"},
  {link:"#", linkText:"About"},
  {link:"#", linkText:"Contact"}
]
const posts =[
  {title:"products 1",description:"lorem Ips crctly"},
  {title:"products 2",description:"lorem Ips crctly"},
  {title:"products 3",description:"lorem Ips crctly"},
  {title:"products 4",description:"lorem Ips crctly"},
  {title:"products 5",description:"lorem Ips crctly"},
  {title:"products 6",description:"lorem Ips crctly"},
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
