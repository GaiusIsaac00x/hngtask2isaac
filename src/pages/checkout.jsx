import React from 'react';
import hngn from '../assets/img/hngn.png';
import hngm from '../assets/img/hngm.png';
import hngo from '../assets/img/hngo.png';
import hngp from '../assets/img/hngp.png';

const Checkout = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-md-5">
            <h3>Order Summary</h3>
            <div className="row align-items-center _0row rounded-4 mt-5">
              <div className="col-lg-4">
                <div className="text-center p-3">
                  <img src={hngn} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4">
                <h5>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="row align-items-center _0row rounded-4 mt-3">
              <div className="col-lg-4">
                <div className="text-center p-3">
                  <img src={hngo} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4">
                <h5>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="row align-items-center _0row rounded-4 mt-3">
              <div className="col-lg-4">
                <div className="text-center p-3">
                  <img src={hngp} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4">
                <h5>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="row align-items-center _0row rounded-4 mt-3">
              <div className="col-lg-4">
                <div className="text-center p-3">
                  <img src={hngm} alt="" className="img-fluid w-75" />
                </div>
              </div>
              <div className="col-lg-4">
                <h5>Sippy Cup (2)</h5>
              </div>
              <div className="col-lg-4">
                <h3># 20,000</h3>
              </div>
            </div>
            <div className="mt-5">
              <a href="#"><span>arrow right icon</span> Back to Shop</a>
            </div>
          </div>
          <div className="col-lg-5 p-5">
            <h3>Payment Information</h3>
            <h5 className="mt-5 fw-bold">Mode of Payment</h5>
            <div>
              <input type="checkbox" /><span className="ms-4">Debit/Credit Card</span>
            </div>
            <div>
              <input type="checkbox" /><span className="ms-4">Pay on Delivery</span>
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
              <div className="mt-5 pt-3">
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
