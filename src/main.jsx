import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import StatisticsSection from './sections.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <StatisticsSection />
    <Footer />
  </React.StrictMode>,
)
