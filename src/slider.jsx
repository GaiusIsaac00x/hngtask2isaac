import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caru1 from "./assets/img/caru1.svg";
import caru2 from "./assets/img/caru2.svg";


function MultipleItems() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    // slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
  centerPadding: '3%',
  };
  return (
    <div className="slider-container mt-4">
      <Slider {...settings}>
        <div className="p-2 position-relative">
          <div className="d-flex justify-content-between bg-light p-4 rounded-4 align-items-center _0carubord">
            <div>
            <h5 className="fw-bold">Clearance Sales</h5>
          <h6>UP TO 40% OFF</h6>
          <div className="mt-5">
            <button className="btn btn-warning border-0 text-white"  style={{ background: 'rgb(255,127,62)' }}>Shop Now</button>
          </div>
            </div>
            <div><img className="w-75" src={caru1} alt="" /></div>
            <div className="position-absolute _0carupos">
            <img className="w-75" src={caru2} alt="" />
            </div>
          </div>
        </div>
        <div className="p-2 position-relative">
          <div className="d-flex justify-content-between bg-light p-4 rounded-4 align-items-center _0carubord">
            <div>
            <h5 className="fw-bold">Shop Fancy 5th Year Anniversary Sales</h5>
            <p>5 customers will get special offers for 5hrs</p>
          <div className="">
            <button className="btn btn-warning border-0 text-white"  style={{ background: 'rgb(255,127,62)' }}>Shop Now</button>
          </div>
            </div>
            <div><img className="w-75" src={caru1} alt="" /></div>
            <div className="position-absolute _0carupos d-none">
            <img className="w-75" src={caru2} alt="" />
            </div>
          </div>
        </div>
        <div className="p-2 position-relative">
          <div className="d-flex justify-content-between bg-light p-4 rounded-4 align-items-center _0carubord">
            <div>
            <h5 className="fw-bold">Clearance Sales</h5>
          <h6>UP TO 40% OFF</h6>
          <div className="mt-5">
            <button className="btn btn-warning border-0 text-white"  style={{ background: 'rgb(255,127,62)' }}>Shop Now</button>
          </div>
            </div>
            <div><img className="w-75" src={caru1} alt="" /></div>
            <div className="position-absolute _0carupos">
            <img className="w-75" src={caru2} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
