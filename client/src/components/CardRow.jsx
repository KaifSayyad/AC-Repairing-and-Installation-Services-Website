import React from "react";
import CardItem from "./CardItem";
import {data} from '../assets/data/data.jsx'

const CardRow = () => {

  console.log(data.services.basic);

  return (
    <>
      <div className="cards container">
        <div className="mx-4 my-4 row justify-content-center">
          <div className="col-md-3">
            <CardItem />
          </div>
          <div className="col-md-3">
            <CardItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRow;
