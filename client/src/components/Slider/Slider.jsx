import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

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
