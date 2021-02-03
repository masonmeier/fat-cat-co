import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import About from '../../assets/images/about-card.jpg';

// core components

function FullBackgroundCard(){
  const styles = {
    cardHeader: {
      backgroundImage: `url(${About})`
    }
  }

  return(
    <>
      <Card
        data-background="image"
        style={styles.cardHeader}
      >
        <CardBody>
          <h6 className="card-category">Contact</h6>
          <div className="card-icon">

          </div>
          <p className="card-description">
            Reach out to ROMAN for collabs, gigs, samples, signing and more!
          </p>
          <CardFooter>
            <Button
              className="btn-round card-link"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Contact
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default FullBackgroundCard;