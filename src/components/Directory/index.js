import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// styles
import "../../paper-kit/assets/css/bootstrap.min.css";
import "../../paper-kit/assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "../../paper-kit/assets/demo/demo.css";
import "../../paper-kit/assets/demo/react-demo.css";

// core components
import LandingPageHeader from '../LandingPageHeader';

function LandingPage() {
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
                <h2 className="title">Let's talk gigs</h2>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                  pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                  Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                  in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                  vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                  Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
                  faucibus libero, at maximus nisl suscipit posuere.
                </h5>
                <br />
                <Button
                  className="btn-fill btn-round"
                  color="danger"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            {/*<Row>*/}
            {/*  <Col md="3">*/}
            {/*    <div className="info">*/}
            {/*      <div className="icon icon-danger">*/}
            {/*        <i className="nc-icon nc-palette" />*/}
            {/*      </div>*/}
            {/*      <div className="description">*/}
            {/*        <h4 className="info-title">Beautiful Gallery</h4>*/}
            {/*        <p className="description">*/}
            {/*          Spend your time generating new ideas. You don't have to*/}
            {/*          think of implementing.*/}
            {/*        </p>*/}
            {/*        <Button*/}
            {/*          className="btn-link"*/}
            {/*          color="danger"*/}
            {/*          href="#pablo"*/}
            {/*          onClick={(e) => e.preventDefault()}*/}
            {/*        >*/}
            {/*          See more*/}
            {/*        </Button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*  <Col md="3">*/}
            {/*    <div className="info">*/}
            {/*      <div className="icon icon-danger">*/}
            {/*        <i className="nc-icon nc-bulb-63" />*/}
            {/*      </div>*/}
            {/*      <div className="description">*/}
            {/*        <h4 className="info-title">New Ideas</h4>*/}
            {/*        <p>*/}
            {/*          Larger, yet dramatically thinner. More powerful, but*/}
            {/*          remarkably power efficient.*/}
            {/*        </p>*/}
            {/*        <Button*/}
            {/*          className="btn-link"*/}
            {/*          color="danger"*/}
            {/*          href="#pablo"*/}
            {/*          onClick={(e) => e.preventDefault()}*/}
            {/*        >*/}
            {/*          See more*/}
            {/*        </Button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*  <Col md="3">*/}
            {/*    <div className="info">*/}
            {/*      <div className="icon icon-danger">*/}
            {/*        <i className="nc-icon nc-chart-bar-32" />*/}
            {/*      </div>*/}
            {/*      <div className="description">*/}
            {/*        <h4 className="info-title">Statistics</h4>*/}
            {/*        <p>*/}
            {/*          Choose from a veriety of many colors resembling sugar*/}
            {/*          paper pastels.*/}
            {/*        </p>*/}
            {/*        <Button*/}
            {/*          className="btn-link"*/}
            {/*          color="danger"*/}
            {/*          href="#pablo"*/}
            {/*          onClick={(e) => e.preventDefault()}*/}
            {/*        >*/}
            {/*          See more*/}
            {/*        </Button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*  <Col md="3">*/}
            {/*    <div className="info">*/}
            {/*      <div className="icon icon-danger">*/}
            {/*        <i className="nc-icon nc-sun-fog-29" />*/}
            {/*      </div>*/}
            {/*      <div className="description">*/}
            {/*        <h4 className="info-title">Delightful design</h4>*/}
            {/*        <p>*/}
            {/*          Find unique and handmade delightful designs related items*/}
            {/*          directly from our sellers.*/}
            {/*        </p>*/}
            {/*        <Button*/}
            {/*          className="btn-link"*/}
            {/*          color="danger"*/}
            {/*          href="#pablo"*/}
            {/*          onClick={(e) => e.preventDefault()}*/}
            {/*        >*/}
            {/*          See more*/}
            {/*        </Button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;