import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) => (
  <section>
    <div className="product-quantity-purchase">
      <div className="product-quantity">
        <span className="product-quantity__title">Quantity </span>
        <img
          className="product-quantity__decrease"
          src={minus}
          alt="Decrease Quantity"
        />
        <span className="product-quantity__amount"> 1 </span>
        <img
          className="product-quantity__increase"
          src={plus}
          alt="Increase Quantity"
        />
      </div>
      <div className="product-otp">
        <span className="product-otp__title">One Time Purchase</span>{' '}
        <img
          src={caret}
          className="product-otp__frequency"
          alt="Select Frequency"
        />
      </div>
    </div>
    <div className="product-price-bag">
      <div className="product-price">{price}</div>
      <button className="product-add-to-bag" name="AddToBag">
        Add To Bag
      </button>
    </div>
  </section>
);
