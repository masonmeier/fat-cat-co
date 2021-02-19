import React from "react";
import { Link } from "react-router-dom";
import AudioWidget from '../SoundCloud/AudioWidget';
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { useHistory } from "react-router-dom";
// reactstrap components

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import './styles.scss'
import "../../paper-kit/assets/css/bootstrap.min.css";
import "../../paper-kit/assets/css/paper-kit.css";
import "../../paper-kit/assets/demo/demo.css";
import "../../paper-kit/assets/demo/react-demo.css";

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
})



const Header = props => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("bg-info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        id="navbar-main"
        expand="lg"
      >
        <Container id='header-container'>
          <div className="navbar-translate">
            <Link className='title-link' to="/">
              R O M A N
            </Link>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              {currentUser && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Account
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger">
                  <DropdownItem
                    onClick={(e) => {e.preventDefault(); signOut();}}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              )}
              {!currentUser && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle color="default" caret nav>
                    Login or Sign Up
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-danger">
                    <DropdownItem
                      to="/dashboard" tag={Link}
                      // onClick={(e) => {e.preventDefault(); history.push('/login')}}
                    >
                      Login
                    </DropdownItem>
                    <DropdownItem
                      onClick={(e) => {e.preventDefault(); history.push('/registration')}}
                    >
                      Register
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Socials
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem onClick={(e) => {e.preventDefault(); history.push('/blog')}}>
                    Blog
                  </DropdownItem>
                  <DropdownItem
                    href="https://futurefunkroman.bandcamp.com/"
                    target="_blank"
                  >
                    Band Camp
                  </DropdownItem>
                  <DropdownItem
                    href="https://soundcloud.com/rmnrmn"
                    target="_blank"
                  >
                    Soundcloud
                  </DropdownItem>
                  <DropdownItem
                    href="https://www.instagram.com/rskachus/"
                    target="_blank"
                  >
                    Instagram
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Tracks
                </DropdownToggle>
                <DropdownMenu
                  id="dropdown-transparent"
                  right
                >
                  <div className="widget-wrap">
                    <AudioWidget />
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  className="contact"
                  to="/contact" tag={Link}
                >
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="about"
                  to="/about" tag={Link}
                >
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

Header.defaultProps = {
  currentUser: null
};


export default Header;