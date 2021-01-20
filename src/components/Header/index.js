import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import './styles.scss';
import { Link } from 'react-router-dom';


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
})

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

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
                  <span className="log-out" onClick={() => signOut()}>
                    LOG OUT
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



export default Header;