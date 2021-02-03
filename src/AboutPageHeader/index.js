import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import Background from '../assets/images/directory/about-roman.png';
import AboutInfo from '../components/AboutInfo/AboutInfo';

// core components

function AboutPageHeader() {
  let pageHeader = React.createRef();
  const futureFunk = 'https://www.theprospectordaily.com/2019/11/12/marching-band-student-and-classical-composer-explains-future-funk/';
  const house = 'https://en.wikipedia.org/wiki/House_music';
  const daftPunk = 'https://en.wikipedia.org/wiki/Daft_Punk';
  const fredFalke = 'https://en.wikipedia.org/wiki/Fred_Falke';
  const bob = 'https://en.wikipedia.org/wiki/Bob_Sinclar';
  const MOJO = 'https://en.wikipedia.org/wiki/Mojo_(magazine)';
  const boogie = 'https://soundcloud.com/rmnrmn/lets-boogie-get-up'
  const withYou = 'https://soundcloud.com/rmnrmn/when-im-with-you'
  const sailor = 'https://soundcloud.com/rmnrmn/sailor-bae'
  const styles = {
    pageHeader: {
      backgroundImage: `url(${Background})`
    },
    setWidth: {
      width: '75%'
    }
  }

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

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={styles.pageHeader}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <Container styles={styles.setWidth}>
              <h1>
                FUNK IS THE GAME
              </h1>
              <br/>
              <p className="white-text">
                ROMAN is a <a href={futureFunk} target="_blank">future funk</a> and
                 <a href={house} target="_blank"> house</a> music artist based out of Sacramento,
                California. ROMAN has been producing music for over 10 years and has
                had numerous projects. He has an incredibly unique sample selection
                and uses creative loops to compose groovy disco tracks that are guaranteed to get you to move.
                ROMAN finds inspirations in the artists: <a href={daftPunk} target="_blank"> Daft Punk</a>,
                <a href={fredFalke} target="_blank"> Fred Falke</a>, <a href={bob} target="_blank"> Bob Sinclaire</a>, and <a href={MOJO} target="_blank"> MOJO</a>. This inspiration has brought tracks such as
                <a href={boogie} target="_blank"> "Let's Boogie (Get Up!)</a>, <a href={withYou} target="_blank"> When I'm With You</a>, and <a href={sailor} target="_blank"> Sailor Bae</a>.
              </p>
              {/*<FullBackgroundCard />*/}
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutPageHeader;