import React from 'react';
import './styles.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="store-exp">
          <div className="explanation-holder">
            <h1 className="store-explanation-title">
              A creator of all things funk
            </h1>
            <p className="store-explanation">
              Check out what he's been making.
            </p>
          </div>
          <div className="catalog-btn-wrap">
            <Link to='/catalog' className="view-catalog">
              view catalog
            </Link>
          </div>
        </div>
        <div className="item-wrapper">
          <Logo />
        </div>
      </div>
    </div>
  )
};

export default Directory;