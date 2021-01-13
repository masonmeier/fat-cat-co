import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';


const Header = props => {
  const { currentUser } = props;

  return (
    <header className="header">
        <div className="wrap">
          <Link to="/" style={{ textDecoration: 'none', color: 'black'  }}>
            <div className="title-wrapper">
                <h1 className="store-title">ROMAN</h1>
            </div>
          </Link>

          <div className="header-nav">

            {currentUser && (
              <ul>
                <li>
                  <Link to='/dashboard'>
                    My Account
                  </Link>
                </li>
                <li>
                  <span className="log-out" onClick={() => auth.signOut()}>
                    Log Out
                  </span>
                </li>
                <li>
                  <Link to='/about'>
                    About Roman
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    Home
                  </Link>
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
              <li>
                <Link to='/catalog'>
                  Catalog
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  About Roman
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Home
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, null) (Header);