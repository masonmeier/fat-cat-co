import React from "react";
import { Link, useHistory } from 'react-router-dom';
// import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';
import './styles.scss'

// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { fetchPostsStart } from '../../../redux/Posts/posts.actions';
// import Post from './index';
// import FormSelect from '../../forms/FormSelect';
// import LoadMore from '../../LoadMore';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import Particles from 'react-particles-js';

// core components
// import DangerNavbar from "components/Navbars/DangerNavbar.js";
// import FooterGray from "components/Footers/FooterGray.js";

const Post = (post) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    postDesc,
    postCategory
  } = post;
  if (!documentID || !postThumbnail || !postName ||
    typeof postDesc === 'undefined') return null;

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

                            {postDesc}

                        </div>
                      </CardBody>
                      {/*<Button className="btn-round" color="danger" size="sm">*/}
                      {/*  Read more*/}
                      {/*</Button>*/}
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
