import React from "react";
import { Link, useHistory } from 'react-router-dom';
// import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';
import './styles.scss'

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";


const Post = (post) => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  const {
    documentID,
    postThumbnail,
    postName,
    cleanedPostDesc,
    postCategory
  } = post;
  if (!documentID || !postThumbnail || !postName ||
    typeof cleanedPostDesc === 'undefined') return null;

  return (
    <>
      <div className="post-wrapper">
        <div className="main">
          <div className="section">
            <Container id='post-container'>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <Link to={`/post/${documentID}`}>
                          <img
                            className="img img-raised"
                            src={postThumbnail}
                            alt={postName}
                          />
                        </Link>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="transparent">
                            {postCategory}
                          </Badge>
                        </div>
                        <Link to={`/post/${documentID}`}>
                          <CardTitle tag="h3" className='card-title'>
                            {postName}
                          </CardTitle>
                        </Link>
                        <div className="card-description">

                            {cleanedPostDesc}

                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
