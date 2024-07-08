import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Cart from './pages/cart1.jsx';
import Cart2 from './pages/cart2.jsx';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import NewArrivalsSection from './section2.jsx';
import Sidebar from './sidebar.jsx';
import Main from './header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';
import './assets/css/custom.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';



const App = () => (
  <React.StrictMode>
    <Router>
      {/* <Cart /> */}
      <Navbar />
      {/* <h1>okay</h1> */}
      {/* <Route path="/cart2" component={Cart2} /> */}
      <Sidebar />
      <Main />
      <NewArrivalsSection />
      <Footer />
      </Router>
   
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
