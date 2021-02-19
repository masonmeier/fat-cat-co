import React from 'react';

import {
  Container,
  Row,
  Col,
} from "reactstrap";


const AdminLayout = props => {



  return (
    <div className="adminLayout">
      <div className="section section-pricing cd-section" id="pricing">
        {/* ********* PRICING 1 ********* */}
        <div className="pricing-1 section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Welcome Back ROMAN!</h2>
                <h5 className="description">
                  What would you like to do?
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <div className="content">
              {props.children}
            </div>
          </Container>
        </div>
        {/* ********* END PRICING 1 ********* */}
        </div>
    </div>
  );
};

export default AdminLayout;