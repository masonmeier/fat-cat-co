import React from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// styles
import "../../paper-kit/assets/css/bootstrap.min.css";
import "../../paper-kit/assets/css/paper-kit.css";
import "../../paper-kit/assets/demo/demo.css";
import "../../paper-kit/assets/demo/react-demo.css";

// core components
import LandingPageHeader from '../LandingPageHeader';

function LandingPage() {
  const history = useHistory();

  function handleClick() {
    history.push("/contact");
  }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <LandingPageHeader />
      <div className="wrapper">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk production</h2>
                <h5>
                  ROMAN has an excellent palette of samples, production tools, recording equipment and vibes
                  for collaborating on and composing music. He has successfully collaborated with artists across
                  multiple genres including
                  <a href="https://soundcloud.com/rmnrmn/hometown-violence-ft-brown-x-king-quartz-x-lord-souja" target="_blank"> Hometown Violence </a>
                  with Sacramento and Detroit artists ΒΣΞζΨ_BROWN, KING QUARTZ and Lord Souja 兵士,
                  <a href="https://soundcloud.com/rmnrmn/spaced-out-ft-french-touch" target="_blank"> Spaced Out</a> ft French Touch,
                  and <a href="https://soundcloud.com/lisaofficesystems" target="_blank"> Lisa Office Systems</a> with Fashionista Boyfriend.
                   Roman is open to collaboration and production offers.
                </h5>
                <br />
                <Button type='button' onClick={handleClick}>
                  Lets Collab!
                </Button>
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;