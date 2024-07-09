import React from 'react';
import footerpic from './assets/img/fancy.svg';
function Footer() {
  return (
    <><footer className="_0bg pt-2 pb-5 d-md-block d-none">
      <div className="container-fluid px-lg-3 mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <div className="col">
            <img src={footerpic} alt="" />
          </div>
          <div className="col">
            <h6 className="text-white">About <span><i>Shop Fancy!</i></span></h6>
            <a href="#" className="mt-4 _0foot">Contact Us</a>
            <a href="#" className="_0foot">About</a>
          </div>
          <div className="col">
            <h6 className="text-white">Payment</h6>
            <a href="#" className="mt-4 _0foot">Master Card</a>
            <a href="#" className="_0foot">Visa</a>
            <a href="#" className="_0foot">Verve</a>
            <a href="#" className="_0foot">USSD code</a>
          </div>
          <div className="col">
            <h6 className="text-white">Terms & Policy</h6>
            <a href="#" className="mt-4 _0foot">Contact Us</a>
            <a href="#" className="_0foot">About</a>
          </div>
          <div className="col">
            <a href="#" className=""><i className="bi bi-facebook text-white"></i></a>
            <a href="#" className="ms-2"><i className="bi bi-instagram text-white"></i></a>
            <a href="#" className="ms-2"><i className="bi bi-twitter-x text-white"></i></a>
            <a href="#" className="ms-2"><i className="bi bi-pinterest text-white"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <footer className="_0bg pt-2 pb-5 d-md-none d-block">
        <div className="container-fluid px-lg-3 mt-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            <div className="col-3 col-md-2">
            <img src={footerpic} alt="" className='img-fluid' />
            </div>
            <div className="col-3">
              <div className='d-md-block d-none'>
                <h6 className="text-white">About Shop Fancy!</h6>
                <a href="#" className="mt-4 _0foot">Contact Us</a>
                <a href="#" className="_0foot">About</a>
              </div>
              <h6 className="text-white _0terms">Terms & Policy</h6>
              <a href="#" className="mt-4 _0foot">Contact Us</a>
              <a href="#" className="_0foot">About</a>
            </div>
            <div className="col-3">
              <h6 className="text-white _0terms">Payment</h6>
              <a href="#" className="mt-4 _0foot">Master Card</a>
              <a href="#" className="_0foot">Visa</a>
              <a href="#" className="_0foot">Verve</a>
              <a href="#" className="_0foot">USSD code</a>
            </div>
            <div className="col-3">
              <div className='d-md-block d-none'>
                <h6 className="text-white">Terms & Policy</h6>
                <a href="#" className="mt-4 _0foot">Contact Us</a>
                <a href="#" className="_0foot">About</a>
              </div>
              <div className='d-md-none d-block'>
                <a href="#" className=""><i className="bi bi-facebook text-white"></i></a>
                <a href="#" className="ms-2"><i className="bi bi-instagram text-white"></i></a>
                <a href="#" className="ms-2"><i className="bi bi-twitter-x text-white"></i></a>
                <a href="#" className="ms-2"><i className="bi bi-pinterest text-white"></i></a>
              </div>
            </div>
            <div className="col">
              <div className='d-md-block d-none'>
                <a href="#" className=""><i className="bi bi-facebook text-white"></i></a>
                <a href="#" className="ms-2"><i className="bi bi-instagram text-white"></i></a>
                <a href="#" className="ms-2"><i className="bi bi-twitter-x text-white"></i></a>
                <a href="#" className="ms-2"><i className="bi bi-pinterest text-white"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
}

export default Footer;
