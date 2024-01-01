import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/slider_images/Image1.jpg'
import Image2 from '../assets/slider_images/Image2.jpg'
import Image3 from '../assets/slider_images/Image3.jpg'
import Image4 from '../assets/slider_images/Image4.jpg'

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
      <img src={Image1} alt="Slider Image 1" />
      </div>
      <div>
      <img src={Image2} alt="Slider Image 2" />
      </div>
      <div>
      <img src={Image3} alt="Slider Image 3" />
      </div>
      <div>
      <img src={Image4} alt="Slider Image 4" />
      </div>
      
    </Slider>
  );
};

export default MySlider;