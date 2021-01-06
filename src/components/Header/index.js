import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import LogoSlideShow from '../Logo';
import { auth } from './../../firebase/utils';


const Header = props => {
  const { currentUser } = props;

  return (
    <header className="header">
        <div className="wrap">
          <Link to="/" style={{ textDecoration: 'none', color: 'black'  }}>
            <div className="title-wrapper">
              <div className="logo-container">
                <LogoSlideShow />
                <h1 className="store-title">Fat Cat Co.</h1>
              </div>
            </div>
          </Link>
          <div className="header-nav">

            {currentUser && (
              <ul>
                <li>
                  <span className="log-out" onClick={() => auth.signOut()}>
                    Log Out
                  </span>
                </li>
              </ul>
            )}
            {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
            )}
          </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;