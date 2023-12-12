import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./components/CSS/styles.css"
import "./components/HomePage/Header.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <App className="contentBackground"/>
  </React.StrictMode>,
)
