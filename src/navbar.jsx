import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';
import notificon from './assets/img/notification-bing.svg';
import shopp from './assets/img/shopping-cart.svg';
import shopp2 from './assets/img/tsk1.svg';

function Navbar() {
  return (
    <div className="_0bg">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className='d-flex d-md-none'>
            <div>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            </div>
            <div><a className="navbar-brand text-white d-md-none d-block" href="#"><i>Shop FANCY!</i></a></div>
          </div>
          <a className="navbar-brand text-white d-md-block d-none" href="#"><i>Shop FANCY!</i></a>
          <div className='d-flex d-md-none'>
            <div><a href=""><span><img src={notificon} alt="" /></span></a></div>
            <div><Link to='/cart2' className='text-white mx-2'><img src={shopp} alt="" /></Link></div>
            <div><a href=""><span><img src={shopp2} alt="" /></span></a></div>
          </div>
          <button className="navbar-toggler d-none d-md-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div>
            <i className="bi bi-list toggle-sidebar-btn" style={{ color: 'white' }}></i>
          </div> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item pt-2">
              <Link to='/' className='text-white'>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Reviews</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-disabled="true">Delivery</a>
              </li>
              <li className="nav-item pt-2 d-none">
                <Link to='/cart2' className='text-white'>Cart</Link>
              </li>
            </ul>
            <div className="d-flex">
            
              <a href=""><span><img src={notificon} alt="" /></span></a>
              <Link to='/cart2' className='text-white mx-2'><img src={shopp} alt="" /></Link>
              <a href=""><span><img src={shopp2} alt="" /></span></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    
  );
}

// export default App;



// import './Navbar.css'; // Assuming you have a CSS file for custom styles

// function Navbar() {
//   return (
//     // <div className="bgcus1 position-relative">
//     //   <div className="container">
//     //     <nav className="navbar navbar-expand-lg navbar-light">
//     //       <div className="container-fluid">
//     //         <a className="navbar-brand" href="#">
//     //           <img src={cosmoSvg} alt="" />
//     //         </a>
//     //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     //           <span className="navbar-toggler-icon"></span>
//     //         </button>
//     //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     //           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//     //             <li className="nav-item">
//     //               <a className="nav-link _0nav me-lg-5" aria-current="page" href="#">About</a>
//     //             </li>
//     //             <li className="nav-item">
//     //               <a className="nav-link _0nav me-lg-5" href="#">Mission</a>
//     //             </li>
//     //             <li className="nav-item dropdown">
//     //               <a className="nav-link dropdown-toggle _0nav me-lg-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//     //                 Gallery
//     //               </a>
//     //               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//     //                 <li><a className="dropdown-item" href="#">Action</a></li>
//     //                 <li><a className="dropdown-item" href="#">Another action</a></li>
//     //                 <li><hr className="dropdown-divider" /></li>
//     //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//     //               </ul>
//     //             </li>
//     //             <li className="nav-item">
//     //               <a className="nav-link _0nav me-lg-5" href="#" tabIndex="-1" aria-disabled="true">Careers</a>
//     //             </li>
//     //             <li className="nav-item">
//     //               <a className="nav-link _0nav" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
//     //             </li>
//     //           </ul>
//     //         </div>
//     //       </div>
//     //     </nav>
//     //   </div>

//     //   <section className="hero _0pad">
//     //     <h3 className="text-center mt-5 text-white">DISCOVER BEYOND</h3>
//     //     <h1 className="text-center text-white mt-4">SPACE</h1>
//     //     <p className="text-center text-white">Embark on a journey of wonder and discovery in the vast <br /> Cosmoxverse - where the universe holds endless possibilities</p>
//     //     <div className="_0pos d-lg-block d-md-none d-none">
//     //       <img src={cosmobPng} alt="" className='imgher' />
//     //     </div>
//     //     <div className="text-center mt-5">
//     //       <button className="btn _0btn px-5">Explore</button>
//     //     </div>
//     //   </section>
//     // </div>
//     <>
      
//     </>
//   );
// }

export default Navbar;
