import React from "react";
import Image1 from '../assets/slider_images/Image1.jpg'
import Image2 from '../assets/slider_images/Image2.jpg'
import Image3 from '../assets/slider_images/Image3.jpg'
import Image4 from '../assets/slider_images/Image4.jpg'

const Slider = () => {
  return (
    <div className="slider-container">
      <img src={Image1} alt="Slider Image 1" />
      <img src={Image2} alt="Slider Image 2" />
      <img src={Image3} alt="Slider Image 3" />
      <img src={Image4} alt="Slider Image 4" />
    </div>
  );
};

export default Slider;
