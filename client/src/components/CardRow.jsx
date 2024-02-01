import React, { useEffect, useState } from "react";


import CardItem from "./CardItem";
import '../assets/styles/CardRow.css'
import getData from "./getData.jsx";
import img from '../assets/images/1.jpg'
import { dataDetails } from '../assets/data/data.jsx'

const CardRow = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const value = await getData();
        setData(value);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  if (data === 0) {
    return (
      <div className='text-center' >
        No Data
      </div>
    );
  }


  return (
    <>
      <div className="my-5 cards ">
        <h4 className="mx-5">Basic Services</h4>
        <div className="margin-x my-4 row justify-content-center bg-white ">
          {data
            .filter(item => item.category === "Basic")
            .map((item, index) => (
              <div className="col-md-4 item-adjust my-2" key={index}>
                <CardItem data={item} />
              </div>
            ))}
        </div>

        <hr />
        <h4 className="mx-5">Gas Services</h4>
        <div className="margin-x my-4 row justify-content-center bg-white ">
          {data
            .filter(item => item.category === "Gas")
            .map((item, index) => (
              <div className="col-md-4 item-adjust" key={index}>
                <CardItem data={item} />
              </div>
            ))}
        </div>
      </div>
      <hr />
      <div className="home-about-us my-4 mx-3 bg-white">
        <div>
          <img src={img} alt="image" className="home-about-img" />
        </div>
        <div className="home-about my-2 mx-2">
          <h5 className="p-2" style={{ color: '#09d' }}>ABOUT COMPANY</h5>
          <h3 className="p-2" >We Offer A Complete Maintenance Service On All Air Condition Equipment</h3>
          <p className="p-2" style={{ fontSize: 'medium' }}>{dataDetails.aboutUs.intorStart}</p>
          <ul>
            <li>Highly skilled & experienced engineers</li>
            <li>Work guaranteed for 2 year</li>
            <li>Emergency call outs 24/7</li>
          </ul>
        </div>
      </div>
      <div className="my-5 cards ">
        <h4 className="mx-5">Second Hand Products and Spare Parts</h4>
        <div className="margin-x my-4 row justify-content-center bg-white ">
          {data
            .filter(item => item.category === "Used")
            .map((item, index) => (
              <div className="col-md-4 item-adjust" key={index}>
                <CardItem data={item} />
              </div>
            ))}
        </div>
      </div>
      <div className="my-4 mx-3 bg-white">
        <div style={{ height: '20px' }}>
        </div>
        <h2 className="text-center">ABOUT US</h2>
        <h6 className="text-center my-1" >Cool Climate: A Leading Online Platform For All Air Conditioner Sales And Services</h6>
        <div className="container my-3">
          <p className="my-2" style={{ fontSize: 'medium' }}>{dataDetails.aboutUs.startingDescription}</p>
          <h6 className="my-2">Why Consider Cool Climate?</h6>
          <p className="my-3">{dataDetails.aboutUs.whyCoolClimate}</p>
        </div>
        <div style={{ height: '20px' }}>
        </div>
      </div >
    </>
  );
};

export default CardRow;
