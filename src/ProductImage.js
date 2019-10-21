import React from "react";

export const ProductImage = ({ image }) => (
  <figure className="product-figure">
    <img src={image} alt="Product" className="product-figure__image" />
  </figure>
);
