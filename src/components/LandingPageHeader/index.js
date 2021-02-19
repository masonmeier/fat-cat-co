import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import "../../paper-kit/assets/css/bootstrap.min.css";
import "../../paper-kit/assets/css/paper-kit.css";
import "../../paper-kit/assets/demo/demo.css";
import "../../paper-kit/assets/demo/react-demo.css";

import Logo from '../../assets/images/directory/roman-logo.jpg';
import './styless.scss';
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom';

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const styles = {
    pageHeader: {
      backgroundImage: `url(${Logo})`
    }
  }

  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
        style={styles.pageHeader}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: '#fff'
              },
              opacity: {
                value: 0.5,
                anim: {
                  enable: true
                }
              },
              size: {
                value: 7,
                random: true,
                anim: {
                  enable: true,
                  speed: 3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                speed: 0.2
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "attract"
                },
              }
            }
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: '0',
            // top: '0',
          }} />
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <Link to={'/blog'}>
                <h1 id="landing-title" className="title">Roman</h1>
                <h3 className="description">
                  A CREATOR OF ALL THINGS FUNK
                </h3>
              </Link>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;