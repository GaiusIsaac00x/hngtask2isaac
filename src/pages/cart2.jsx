import React from 'react';
import hngm from '../assets/img/hngm.png';
import hngn from '../assets/img/hngn.png';
import hngo from '../assets/img/hngo.png';
import hngp from '../assets/img/hngp.png';
import hngcx from '../assets/img/hngc1.svg';
import hngcrv from '../assets/img/hngcrv.svg';
import shoppingcartx from '../assets/img/shopping-cartx.svg';

// import hngm from './assets/img/hngm.png';

const Cart2 = () => {
  const newLocal = 
  <section className='d-md-none'>
    <section className='mb-3 d-md-none'>
  
  <div className="_0bg py-3 px-lg-3 px-3">
          <div className='d-flex align-items-center justify-content-between'>
            <div>
          <h3 className="text-white fw-bold">Top Selling Product <span><i></i></span> </h3>
          </div>
          <div>
            <a href="" className='text-white'>View All<i class="bi bi-arrow-right"></i></a>
          </div>
          </div>
          </div>
          <div className="container-fluid mt-3">
    <div className="row ">
          <div className="col-6">
              <div className="card position-relative">
                <div className="_0posi d-md-block d-none">
                  <img src={shoppingcartx} alt="" className='img-fluid' />
                </div>
                <div className="text-center _0imgtop ">
                  <img src={hngm} className="card-img-top" alt="..." style={{ width: '60% !important' }} />
                </div>
                <div className="card-body position-relative">
                  <div className='_0posismall'>
                      <img src={hngcrv} alt="" />
                  </div>
                  <h5 className="card-title text-dark">Tote Bag</h5>
                  <p className="mb-0">&#8358; 10,000</p>
                  <div className="_0stars">
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card position-relative">
                <div className="_0posi d-md-block d-none">
                  <img src={shoppingcartx} alt="" className='img-fluid' />
                </div>
                <div className="text-center _0imgtop ">
                  <img src={hngm} className="card-img-top" alt="..." style={{ width: '60% !important' }} />
                </div>
                <div className="card-body position-relative">
                <div className='_0posismall'>
                      <img src={hngcrv} alt="" />
                  </div>
                  <h5 className="card-title text-dark">Tote Bag</h5>
                  <p className="mb-0">&#8358; 10,000</p>
                  <div className="_0stars">
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill _0star"></i></span>
                    <span><i className="bi bi-star-fill"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
         
        
  </section>
  </section>;
    return (
        <>
    <section className="py-5">
       <div className="container-fluid px-3">
        <h3 className="ms-3 text-md-start text-center">Shopping Cart</h3>
        <div className="row mt-4">
          <div className="col-lg-10 col-md-10">
            {/* First item row */}
            <div className="row mx-3 d-md-flex d-none">
              <div className="col-lg-3 col-md-3">
                <h6 className="fw-bold">Product Detail</h6>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="fw-bold">Quantity</h6>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="fw-bold">Price</h6>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="fw-bold">Total</h6>
              </div>
            </div>
            {/* Sample product row */}
            <div className="row mt-4 _0row mx-3 align-items-center py-3 rounded-3">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-md-50 w-50">
                    <div>
                      <img src={hngm} alt="" className="img-fluid w-100 w-md-50" />
                    </div>
                  </div>
                  <div className="text-start w-md-50 w-50 py-md-0 py-3 ps-md-0 ps-2">
                    <span className='_0totsm' style={{ fontWeight: 900 }}>Tote Bag</span> <br />
                    <span className='d-md-none d-block'>&#8358;10,000</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="text-end text-md-start">
                  <a href="#" className="_0decr">-</a>
                  <input type="text" placeholder="2" className="mx-2 text-center rounded-2 _0crtinp" style={{ width: '30%', backgroundColor: 'transparent' }} />
                  <a href="#" className="_0decr">+</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="d-md-block d-none">&#8358; 20,000</h6>
              </div>
              <div className="col-lg-3 col-md-3 position-relative">
                <h6 className="d-md-block d-none">&#8358; 20,000</h6>
                <div className="_0post">
                  <img src={hngcx} alt="" className='_0cncl'/>
                </div>
              </div>
            </div>
            <div className="row mt-4 _0row mx-3 align-items-center py-3 rounded-3">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-md-50 w-50">
                    <div>
                      <img src={hngn} alt="" className="img-fluid w-100 w-md-50" />
                    </div>
                  </div>
                  <div className="text-start w-md-50 w-50 py-md-0 py-3 ps-md-0 ps-2">
                    <span style={{ fontWeight: 900 }}>Silicon Cutlery Set</span> <br />
                    <span className='d-md-none d-block'>&#8358;10,000</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="text-end text-md-start">
                  <a href="#" className="_0decr">-</a>
                  <input type="text" placeholder="2" className="mx-2 text-center rounded-2 _0crtinp" style={{ width: '30%', backgroundColor: 'transparent' }} />
                  <a href="#" className="_0decr">+</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="d-md-block d-none">&#8358; 5,000</h6>
              </div>
              <div className="col-lg-3 col-md-3 position-relative">
                <h6 className="d-md-block d-none">&#8358; 5,000</h6>
                <div className="_0post">
                <img src={hngcx} alt="" className='_0cncl'/>
                </div>
              </div>
            </div>
            <div className="row mt-4 _0row mx-3 align-items-center py-3 rounded-3">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-md-50 w-50">
                    <div>
                      <img src={hngo} alt="" className="img-fluid w-100 w-md-50" />
                    </div>
                  </div>
                  <div className="text-start w-md-50 w-50 py-md-0 py-3 ps-md-0 ps-2">
                    <span style={{ fontWeight: 900 }}>Floating Metal Rack</span> <br />
                    <span className='d-md-none d-block'>&#8358;10,000</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="text-end text-md-start">
                  <a href="#" className="_0decr">-</a>
                  <input type="text" placeholder="2" className="mx-2 text-center rounded-2 _0crtinp" style={{ width: '30%', backgroundColor: 'transparent' }} />
                  <a href="#" className="_0decr">+</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="d-md-block d-none">&#8358; 20,000</h6>
              </div>
              <div className="col-lg-3 col-md-3 position-relative">
                <h6 className="d-md-block d-none">&#8358; 20,000</h6>
                <div className="_0post">
                <img src={hngcx} alt="" className='_0cncl'/>
                </div>
              </div>
            </div>
            <div className="row mt-4 _0row mx-3 align-items-center py-3 rounded-3">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-md-50 w-50">
                    <div>
                      <img src={hngp} alt="" className="img-fluid w-100 w-md-50" />
                    </div>
                  </div>
                  <div className="text-start w-md-50 w-50 py-md-0 py-3 ps-md-0 ps-2">
                    <span style={{ fontWeight: 900 }}>Cast Iron Set</span> <br />
                    <span className='d-md-none d-block'>&#8358;10,000</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="text-end text-md-start">
                  <a href="#" className="_0decr">-</a>
                  <input type="text" placeholder="2" className="mx-2 text-center rounded-2 _0crtinp" style={{ width: '30%', backgroundColor: 'transparent' }} />
                  <a href="#" className="_0decr">+</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <h6 className="d-md-block d-none">&#8358; 20,000</h6>
              </div>
              <div className="col-lg-3 col-md-3 position-relative">
                <h6 className="d-md-block d-none">&#8358; 20,000</h6>
                <div className="_0post">
                <img src={hngcx} alt="" className='_0cncl'/>
                </div>
              </div>
            </div>
            
            {/* <span className='d-md-none d-block'>&#8358;10,000</span> */}
          </div>
        </div>
      </div>
    </section>
    <section className="crtsection2 px-4 py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-3">
                <h5 className='d-md-block d-inline'>Promo Code?</h5>
                <div className="position-relative mt-3 d-md-block d-inline ms-3">
                  <input type="text" style={{ width: '50%' }} className="rounded-2" placeholder="Inem22" />
                  <img src={hngcx} alt="" style={{ width: '5%' }} />
                </div>
                <div className="mt-5">
                  <a href="" className='_0toshop px-4 py-3 rounded-3 d-md-block d-none'><span><i class="bi bi-arrow-left"></i></span> Back to Shop</a>
                </div>
              </div>
              <div className="col-lg-4">
              </div>
              <div className="col-lg-5">
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
                <div className="mt-5 text-center">
                  <a href="" className='_0toshop2 px-4 py-3 rounded-2'>Check-out <span className='d-md-inline d-none'><i class="bi bi-arrow-right"></i></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
    <section className='mb-3 d-md-none'>
      
    <div className="_0bg py-3 px-lg-3 px-3">
            <div className='d-flex align-items-center justify-content-between'>
              <div>
            <h3 className="text-white fw-bold">You May Also Like <span><i></i></span> </h3>
            </div>
            <div>
              <a href="" className='text-white'>View All<i class="bi bi-arrow-right"></i></a>
            </div>
            </div>
            </div>
            <div className="container-fluid mt-3">
      <div className="row ">
            <div className="col-6">
                <div className="card position-relative">
                  <div className="_0posi d-md-block d-none">
                    <img src={shoppingcartx} alt="" className='img-fluid' />
                  </div>
                  <div className="text-center _0imgtop ">
                    <img src={hngm} className="card-img-top" alt="..." style={{ width: '60% !important' }} />
                  </div>
                  <div className="card-body position-relative">
                    <div className='_0posismall'>
                        <img src={hngcrv} alt="" />
                    </div>
                    <h5 className="card-title text-dark">Tote Bag</h5>
                    <p className="mb-0">&#8358; 10,000</p>
                    <div className="_0stars">
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card position-relative">
                  <div className="_0posi d-md-block d-none">
                    <img src={shoppingcartx} alt="" className='img-fluid' />
                  </div>
                  <div className="text-center _0imgtop ">
                    <img src={hngm} className="card-img-top" alt="..." style={{ width: '60% !important' }} />
                  </div>
                  <div className="card-body position-relative">
                  <div className='_0posismall'>
                        <img src={hngcrv} alt="" />
                    </div>
                    <h5 className="card-title text-dark">Tote Bag</h5>
                    <p className="mb-0">&#8358; 10,000</p>
                    <div className="_0stars">
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill _0star"></i></span>
                      <span><i className="bi bi-star-fill"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
          
          
    </section>
    {newLocal}
    </>
    
    );
};

export default Cart2;
