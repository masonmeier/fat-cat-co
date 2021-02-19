import React from 'react';
import './styles.scss';
import {Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

const Footer = props => {
  return (
    <footer className="footer footer-gray footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  // change this later
                  href="http://masonmeier.info"
                  target="_blank"
                  className="mr-1"
                >
                  On The Rocks
                </a>
              </li>
              <li>
                <Link to='/blog'>
                  Blog
                </Link>

              </li>
              <li>
                <a
                  href="https://i.kym-cdn.com/photos/images/facebook/001/356/162/17f.jpg"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by <a className="dev-name" href="http://masonmeier.info">Mason Meier</a>
              </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;