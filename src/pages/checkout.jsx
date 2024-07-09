import React from 'react';
import { Link } from 'react-router-dom';
import hngn from '../assets/img/hngn.png';
import hngm from '../assets/img/hngm.png';
import hngo from '../assets/img/hngo.png';
import hngp from '../assets/img/hngp.png';

const Checkout = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-md-5" style={{ borderRight: '1px solid black' }}>
            <h3 className='d-md-block d-none'>Order Summary</h3>
            <h3 className='fw-bold text-center mt-4 d-md-none'>Checkout</h3>
            <div className="row align-items-center _0row rounded-4 mt-5 py-md-0 py-3 mx-md-0 mx-3">
              <div className="col-lg-4 col-3">
                <div className="text-center p-3">
                  <img src={hngn} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <h5 className='fw-bold'>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4 col-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="row align-items-center _0row rounded-4 mt-3 py-md-0 py-3 mx-md-0 mx-3">
              <div className="col-lg-4 col-3">
                <div className="text-center p-3">
                  <img src={hngo} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <h5>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4 col-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="row align-items-center _0row rounded-4 mt-3 py-md-0 py-3 mx-md-0 mx-3">
              <div className="col-lg-4 col-3">
                <div className="text-center p-3">
                  <img src={hngp} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <h5 className='fw-bold'>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4 col-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="row align-items-center _0row rounded-4 mt-3 py-md-0 py-3 mx-md-0 mx-3">
              <div className="col-lg-4 col-3">
                <div className="text-center p-3">
                  <img src={hngm} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <h5 className='fw-bold'>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4 col-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="mt-5 d-md-block d-none">
            {/* <Link to='/cart2' className='text-white mx-2'><img src={shopp} alt="" /></Link> */}
                  <Link to='/' className='_0toshop px-4 py-3 rounded-3'><span><i class="bi bi-arrow-left"></i></span> Back to Shop</Link>
                </div>
          </div>
          <div className="col-lg-5 p-5">
            <h3 className='d-md-block d-none'>Payment Information</h3>
            <h5 className="mt-md-5 mt-3 fw-bold d-md-block d-none">Mode of Payment</h5>
            <div className='d-md-block d-none'>
              <input type="checkbox" /><span className="ms-4">Debit/Credit Card</span>
            </div>
            <div className='d-md-block d-none'>
              <input type="checkbox" /><span className="ms-4">Pay on Delivery</span>
            </div>
            <div className="row d-md-none mt-4 rounded-3 p-3 order">
                <h3 className='fw-bold'>Order Summary</h3>
                <div className="d-flex justify-content-between">
                  <div><h5>Sub-Total <span className='_0off'>(Tax Incl.)</span></h5></div>
                  <div><h5># 33,000</h5></div>
                </div>
                <div className="d-flex justify-content-between">
                  <div><h5>Promo <span className='_0off'>(15%)</span></h5></div>
                  <div><h5># 33,000</h5></div>
                </div>
                <div className="d-flex justify-content-between mt-3 _0bdtp pt-3">
                  <div><h5>Total</h5></div>
                  <div><h5># 33,000</h5></div>
                </div>
            </div>
            <h5 className="fw-bold mt-5">Enter Card Details</h5>
            <form action="">
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label fw-bold mt-3">Card Number</label>
                <input type="text" className="form-control _0inp" id="cardNumber" placeholder="1234 5678 9878" />
              </div>
              <div className="mb-3">
                <label htmlFor="cardName" className="form-label fw-bold">Name</label>
                <input type="text" className="form-control _0inp" id="cardName" placeholder="Catherine Smith" />
              </div>
              <div className="mb-3 d-flex">
                <div>
                  <label htmlFor="expiryDate" className="form-label fw-bold">Expiry Date</label>
                  <input type="text" className="form-control _0inp w-75" id="expiryDate" placeholder="04/24" />
                </div>
                <div className="ms-3">
                  <label htmlFor="cvv" className="form-label fw-bold">CVV</label>
                  <input type="text" className="form-control _0inp w-75" id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="mt-5">
                <input type="checkbox" />
                <span className="ms-3">Save card for future use</span>
              </div>
              <div className="mt-5 pt-3 text-md-start text-center">
                <button type="submit" className="btn btn-primary _0btn border-0 px-5">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
