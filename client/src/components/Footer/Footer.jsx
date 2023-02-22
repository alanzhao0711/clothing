import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </span>
          <span>
            {" "}
            <Link className="link" to="/products/2">
              Men
            </Link>
          </span>
          <span>
            {" "}
            <Link className="link" to="/products/3">
              Shoes
            </Link>
          </span>
          <span>
            {" "}
            <Link className="link" to="/products/3">
              Accessories
            </Link>
          </span>
          <span>
            {" "}
            <Link className="link" to="/products/3">
              New Arrivals
            </Link>
          </span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Alan.S is a lifestyle retailer dedicated to inspiring customers
            through a unique combination of product, creativity and cultural
            understanding.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Alan.S</span>
          <span className="copyright">© Alan.S All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
