import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Navbar() {
  return (
    <div className="_0bg">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#"><i>Shop FANCY!</i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <i className="bi bi-list toggle-sidebar-btn" style={{ color: 'white' }}></i>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
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
                <a className="nav-link" aria-disabled="true">Recovery</a>
              </li>
            </ul>
            <div className="d-flex">
              <a href=""><span><img src="./assets/img/notification-bing.svg" alt="" /></span></a>
              <a href=""><span className="mx-lg-2"><img src="./assets/img/shopping-cart.svg" alt="" /></span></a>
              <a href=""><span><img src="./assets/img/tsk1.svg" alt="" /></span></a>
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
