import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          SUN-KISSED AND CRAFTED Upgrade your vacation style with off-duty
          must-haves that are perfect for day or night. Soak up our sun-bleached
          colors, breezy silhouettes and light-as-air materials. Feel free and
          effortless in relaxed dresses, crop tops, wide-leg pants, pull-on
          shorts, and so much more.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
