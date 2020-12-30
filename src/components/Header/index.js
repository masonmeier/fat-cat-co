import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import LogoSlideShow from '../Logo';


const Header = props => {
  return (
    <header className="header">
        <div className="wrap">
          <Link to="/" style={{ textDecoration: 'none', color: 'black'  }}>
            <div className="title-wrapper">
              <div className="logo-container">
                <LogoSlideShow/>
                <h1 className="store-title">Fat Cat Co.</h1>
              </div>
            </div>
          </Link>
          <div className="header-nav">
            <ul>
              <li>
                <Link to="/registration">
                  Register
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </header>
  )
};

export default Header;