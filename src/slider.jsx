import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cosimgx1 from './assets/images/cosimgx1.png';
import cosimgx2 from './assets/images/cosimgx2.png';
import cosimgx3 from './assets/images/cosimgx3.png';

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
        <img src={cosimgx1} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx1} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx1} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx1} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx1} alt="" className="w-75" />
        </div>
        <div>
        <img src={cosimgx1} alt="" className="w-75" />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
