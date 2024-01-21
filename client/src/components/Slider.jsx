import React from "react";
import "../assets/styles/Slider.css";
import img4 from '../assets/images/img4.jpg'
import img3 from '../assets/images/img3.jpg'
import img2 from '../assets/images/img2.jpg'
import img from '../assets/images/img.jpg'

const Slider = () => {
  const imgUrls = [
    img3,
    img,
    img2,
    img4,
  ];

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"
        style={{marginTop: '85px'}}

      >
        
        <div className="carousel-indicators visually-hidden">
          {imgUrls.map((url, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index.toString()}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {imgUrls.map((url, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="img-gradient">
                <img
                  src={url}
                  className="d-block w-100 "
                  alt={`Slide ${index + 1}`}
                  id="logoImages"
                />
              </div>

              <div className="carousel-caption d-none d-md-block">
                <p>{`Keeping it Cool, Fixing it Right Your Trusted Partner for Superior AC Repair and Services at Cool Climate`}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
