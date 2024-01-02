import React from "react";
import "../assets/styles/Slider.css";

const Slider = () => {
  const imgUrls = [
    "https://source.unsplash.com/800x324/?services,ac&1",
    "https://source.unsplash.com/800x324/?services,ac&2",
    "https://source.unsplash.com/800x324/?services,ac&3",
  ];

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        {/* Carousel Indicators */}
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

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {imgUrls.map((url, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              {/* Image with Gradient Overlay */}
              <div className="img-gradient">
                <img
                  src={url}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{width:'800px',height:'324'}}
                />
              </div>

              {/* Carousel Caption */}
              <div className="carousel-caption d-none d-md-block">
                <h5>{`Slide ${index + 1} label`}</h5>
                <p>{`Some representative placeholder content for slide ${
                  index + 1
                }.`}</p>
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
