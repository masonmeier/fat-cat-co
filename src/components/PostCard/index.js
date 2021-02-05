//v2
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostStart, setPost } from '../../redux/Posts/posts.actions';

// reactstrap components
import { Button } from "reactstrap";
import Logo from '../../assets/images/directory/roman-logo.jpg';

// core components

const mapState = state => ({
  post: state.postsData.post
});


const PostCard = ({}) => {
  let pageHeader = React.createRef();
  const dispatch = useDispatch();
  const { postID } = useParams();
  const { post } = useSelector(mapState);

  const {
    postThumbnail,
    postName,
    postCategory,
    postPrice,
    postDesc,
  } = post;

  useEffect(() => {
    dispatch(
      fetchPostStart(postID)
    )

    return () => {
      dispatch(
        setPost({})
      )
    }

  }, []);

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
      backgroundImage: `url(${postThumbnail})`
    }
  }

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={styles.pageHeader}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="title-uppercase text-center diskoteque">{postName}</h1>
            <h3 className="text-center">{postCategory}</h3>
            <br />
            <p>
              {postDesc}
            </p>
            <br />
            <br />
            <Button
              className="btn-round"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              <i className="fa fa-share-alt mr-1 " />
              Share Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
