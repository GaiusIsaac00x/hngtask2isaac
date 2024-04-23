import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cosimgx1 from './assets/images/cosimgx1.png';
import cosimgx2 from './assets/images/cosimgx2.png';
import cosimgx3 from './assets/images/cosimgx3.png';
import cosimgx4 from './assets/images/cosimgx4.jpeg';
import cosimgx5 from './assets/images/cosimgx5.jpeg';
import cosimgx6 from './assets/images/cosimgx6.jpeg';
import cosimgx7 from './assets/images/cosimgx7.jpeg';
import cosimgx8 from './assets/images/cosimgx8.jpeg';
import cosimgx9 from './assets/images/cosimgx9.jpeg';
import cosimgx10 from './assets/images/cosimgx10.jpeg';
// import cosimgx8 from './assets/images/cosimgx8.png';

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  centerPadding: '5%',
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={cosimgx1} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx2} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx3} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx4} alt="" className="w-75" style={{ borderRadius: '40px' }}/>
        </div>
        <div>
        <img src={cosimgx5} alt="" className="w-75" style={{ borderRadius: '40px' }}/>
        </div>
        <div>
        <img src={cosimgx6} alt="" className="w-75" style={{ borderRadius: '40px' }}/>
        </div>
        <div>
        <img src={cosimgx7} alt="" className="w-75" style={{ borderRadius: '40px' }}/>
        </div>
        <div>
        <img src={cosimgx8} alt="" className="w-75" style={{ borderRadius: '40px' }}/>
        </div>
        <div>
        <img src={cosimgx9} alt="" className="w-75" style={{ borderRadius: '40px', height: '100%' }}/>
        </div>
        <div>
        <img src={cosimgx10} alt="" className="w-75" style={{ borderRadius: '40px' }}/>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
