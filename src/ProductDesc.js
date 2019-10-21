import React from 'react';

import caret from './images/caret.png';

export const ProductDesc = ({
  category,
  name,
  description,
  rating,
  features,
  shade,
}) => (
  <section className="product-details">
    <h4 className="product-category">{category}</h4>
    <h2 className="product-name">{name}</h2>
    <p className="product-description">{description}</p>
    <figure className="product-rating">
      <img
        src={rating}
        alt="Product Rating"
        className="product-rating__stars"
      />
      <img
        src={caret}
        alt="View All Ratings"
        className="product-rating__view-all"
      />
    </figure>
    <section className="product-detailed-description">
      <div className="product-benifits-finish">
        <div className="product-benifits detailed-description-style">
          <h4 className="product-benifits__title">Benefits</h4>
          <p className="product-benifits__description">{features.benefits}</p>
        </div>
        <div className="product-finish detailed-description-style">
          <h4 className="product-finish__title">Finish</h4>
          <p className="product-finish__description">{features.finish}</p>
        </div>
      </div>
      <div className="product-coverage-ingredients">
        <div className="product-coverage detailed-description-style">
          <h4 className="product-coverage__title">Coverage</h4>
          <p className="product-coverage__description">{features.coverage}</p>
        </div>
        <div className="product-key-ingredients detailed-description-style">
          <h4 className="product-key-ingredients__title">Key Ingredients</h4>
          <p className="product-key-ingredients__description">
            {features.keyIngredients}{' '}
            <a
              className="product-key-ingredients__link"
              href="http://www.clinique.com"
            >
              More
            </a>
          </p>
        </div>
      </div>
    </section>
    <section className="product-shade">
      <span className="product-shade__shade-name">{shade.name}</span>
      <div
        className="product-shade__shade-color"
        style={{ background: shade.color }}
      />
    </section>
  </section>
);
