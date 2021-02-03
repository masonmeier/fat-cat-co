import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import "../../paper-kit/assets/css/bootstrap.min.css";
import "../../paper-kit/assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "../../paper-kit/assets/demo/demo.css";
import "../../paper-kit/assets/demo/react-demo.css";

import Logo from '../../assets/images/directory/roman-logo.png';
import './styless.scss';

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
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 id="landing-title" className="title">ROMAN</h1>
              <h3 className="description">
                A CREATOR OF ALL THINGS FUNK
              </h3>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;