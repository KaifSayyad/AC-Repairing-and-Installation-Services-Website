import React, { useState } from "react";


import gif from '../assets/images/finger-tapping-loading-animation.gif';
import useLoadImage from '../hooks/useLoadimage.jsx';


const CardItem = ({data}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imagePath = useLoadImage(data);


  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="card mx-4 my-3" style={{ width: '20rem', height: '28rem', cursor:'pointer',boxShadow:'4px 4px 2px gray' }}>
        {!imageLoaded && (
          <img
            src={gif}
            className="card-img-top"
            alt="loading"
            style={{ height: '18rem', width: '19.9rem' }}
          />
        )}
        <img
          src={imagePath}
          className={`card-img-top ${!imageLoaded ? 'd-none' : ''}`}
          alt="img"
          style={{ height: '18rem', width: '19.9rem' }}
          onLoad={handleImageLoad}
        />
        <div className="card-body">
          <div style={{ width: '20rem', height: '30%' }}>
            <h5>{data.title}</h5>
            <p>{data.description}</p>
            <p style={{fontWeight:'bold', fontSize:'medium'}}>
              <span>Price : ₹</span> {data.price}/-
            </p>
          </div>
          <button
          style={{marginLeft:"60%", marginTop:"10px"}}
                type="button"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="btn btn-secondary"
              > Book now</button>
        </div>
      </div>

    </>
  );
};

export default CardItem;
