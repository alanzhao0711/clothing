import React from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="container">
      <Link to="/products/2">
        <img src="./img/h1.png" alt="" />
      </Link>
      <Link to="/products/3">
        <img src="./img/h2.png" alt="" />
      </Link>
      <Link to="/products/1">
        <img src="./img/h3.png" alt="" />
      </Link>
    </div>
  );
};

export default Slider;
