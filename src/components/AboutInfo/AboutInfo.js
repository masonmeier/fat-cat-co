import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import About from '../../assets/images/directory/about-roman.png';
import './styles.scss'

function AboutInfo() {

  const styles = {
    pageHeader: {
      backgroundImage: `url(${About})`
    }
  }

  return (
    <div className="center-header">
        <div
          id="about-header"
          className="page-header page-header-small"
          style={{
            background: 'black',
            opacity: '.75'
          }}
        >
          <div className="content-center">
            <Container>
              <h1>
                FUNK IS THE GAME
              </h1>
                <p className="white-text">
                  ROMAN is a future funk artist based out of Sacramento, California who specializes in house music and future funk. ROMAN has been producing electronic music for over 10 years and has had numerous projects. ROMAN has an incredibly unique sample selection and uses creative loops to compose groovy disco tracks that keep you from sitting still. ROMAN has been inspired by artists such as Daft Punk, Fred Falke, Bob Sinclaire, and MOJO. This inspiration has brought tracks such as "Let's Boogie (Get Up!), When I'm With You, and Sailor Bae.
                </p>
                {/*<FullBackgroundCard />*/}
            </Container>
          </div>
        </div>
    </div>
  );
}

export default AboutInfo;
