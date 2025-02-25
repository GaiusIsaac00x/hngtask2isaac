// Main.jsx
import React from 'react';
import shoppingcartx from './assets/img/shopping-cartx.svg';
import NewArrivalsSection from './section2.jsx';
import hng1a from './assets/img/hng1a.png';
import hng1b from './assets/img/hng1b.png';
import hng1c from './assets/img/hng1c.png';
import hng1d from './assets/img/hng1d.png';
import hng1e from './assets/img/hng1e.png';
import hng1f from './assets/img/hng1f.png';
import hng1g from './assets/img/hng1g.png';
import hng1h from './assets/img/hng1h.png';
import hng1i from './assets/img/hng1i.png';
import hng1j from './assets/img/hng1j.png';
import hng1k from './assets/img/hng1k.png';
import hng1L from './assets/img/hng1L.png';
import MultipleItems from './slider.jsx';


const Main = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <div className="col-lg-5">
        <input type="text" className='w-100 bg-none rounded-4 _0inp py-2 px-2' placeholder='Search'/>
        </div>
      </div>
      <div className="container-fluid px-3">
      <div className="row">
      <MultipleItems />
      </div>
      </div>
      </div>
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-2">
          {/* <h3>Category</h3> */}
          <div class="dropdown text-center  mb-4">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Water Bottles</a></li>
    <li><a class="dropdown-item" href="#">Tote Bags</a></li>
    <li><a class="dropdown-item" href="#">Crocs</a></li>
    <li><a class="dropdown-item" href="#">Biker Shorts</a></li>
    <li><a class="dropdown-item" href="#">Crop Tops</a></li>
    <li><a class="dropdown-item" href="#">Bucket Hats</a></li>
  </ul>
</div>
          </div>
          <div className="col-lg-10">
            <div className="row">
            <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1b}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Melon Hat</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                    </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1a}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Smiley Bucket Hat</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                    </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                    </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                    </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                    </span>
                    <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop pt-2">
                <img
                  src={hng1c}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Wallet</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1d}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Gym Water Bottle</h5>
                <p className="mb-0">&#8358; 9,500</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1e}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Cross-body bag</h5>
                <p className="mb-0">&#8358; 8,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1f}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Travel Bottle Set</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span>
                    <i className="bi bi-star-fill _0star ms-1"></i>
                  </span>
                  <span>
                    <i className="bi bi-star-fill _0star ms-1"></i>
                  </span>
                  <span>
                    <i className="bi bi-star-fill ms-1"></i>
                  </span>
                  <span>
                    <i className="bi bi-star-fill ms-1"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1g}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Sippy Cup</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1h}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Bucket Hat</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop pt-3">
                <img
                  src={hng1i}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Cloud Mirror</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-4">
                <img
                  src={hng1j}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Face Cap</h5>
                <p className="mb-0">&#8358; 5,000</p>
                {/* Star ratings */}
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  {/* More star icons */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              {/* Card content */}
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-4">
                <img
                  src={hng1k}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                {/* Card title and price */}
                <h5 className="card-title text-dark">Pink Barbie Scrunchie </h5>
                <p className="mb-0">&#8358; 5,000</p>
                {/* Star ratings */}
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card position-relative">
              <div className="_0posi">
                <img src={shoppingcartx} alt="" />
              </div>
              <div className="text-center _0imgtop p-3">
                <img
                  src={hng1L}
                  className="card-img-top w-75"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark">Water Bottle</h5>
                <p className="mb-0">&#8358; 5,000</p>
                <div className="_0stars">
                  <span>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                  <span className='ms-1'>
                    <i className="bi bi-star-fill _0star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        
        </div>
        <div className="row">
          <div className="text-center">
            <span>
              <button className="_0page border-0 rounded-2 py-2 px-3">
                <i className="bi bi-chevron-left"></i>
              </button>
            </span>
            <span className="_0btnactive px-3 py-2 rounded-2 text-white ms-2">
              1
            </span>
            <span className="ms-2">of</span>
            <span className="_0btninactive px-3 py-2 rounded-2 ms-2">20</span>
            <span>
              <button className="_0page border-0 rounded-2 py-2 px-3 ms-2">
                <i className="bi bi-chevron-right"></i>
              </button>
            </span>
          </div>
        </div>
        
      </section>
    </main>
    <NewArrivalsSection />
    </div>
  );
};

export default Main;
