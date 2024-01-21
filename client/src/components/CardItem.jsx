import React from "react";
import logo from '../assets/images/card_image1.jpg'


const CardItem = () => {
  return (
    <>
      <div className="card my-3" style={{ width: '18rem' }}>
      <img src={logo} className="card-img-top" alt="img"/ >
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
