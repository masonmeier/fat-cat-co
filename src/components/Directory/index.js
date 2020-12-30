import React from 'react';
import './styles.scss';
import ShopHoodies from './../../assets/images/directory/hoodie-3.png';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="store-exp">
          <div className="explanation-holder">
            <h1 className="store-explanation-title">
              The Cozy Cat Collection.
            </h1>
            <p className="store-explanation">
              Unique, limited run clothing to help cats find homes.
            </p>
          </div>
          <div className="shop-button-holder">
            <button className="shop-now">
              Shop Now
            </button>
          </div>
        </div>
        <div className="item-wrapper">
          <div
            id="item"
            style={{
              backgroundImage: `url(${ShopHoodies})`
            }}
          >
        </div>
        </div>
      </div>
    </div>
  )
};

export default Directory;