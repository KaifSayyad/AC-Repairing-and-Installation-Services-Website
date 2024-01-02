import React from "react";
import CardItem from "./CardItem";

const CardRow = () => {
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
          <div className="col-md-3">
            <CardItem />
          </div>
          <div className="col-md-3">
            <CardItem />
          </div>
          <div className="col-md-3">
            <CardItem />
          </div>
          <div className="col-md-3">
            <CardItem />
          </div>
          <div className="col-md-3">
            <CardItem />
          </div>
          <div className="col-md-3">
            <CardItem />
          </div>
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
