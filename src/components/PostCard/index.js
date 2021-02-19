//v2
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostStart, setPost } from '../../redux/Posts/posts.actions';
import './styles.scss';

import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  TumblrIcon,
  WhatsappIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  EmailIcon,
  PinterestIcon,
  RedditIcon,
} from "react-share";

// reactstrap components
import {Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';

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
    cleanedPostDesc,
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

  //set size transform
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

  //set background
  const styles = {
    pageHeader: {
      backgroundImage: `url(${postThumbnail})`
    }
  }

  //set path for social share
  const pathName = window.location.href;



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
            <h1 className="title-uppercase text-center">{postName}</h1>
            <h3 className="text-center">{postCategory}</h3>
            <br />
            <p>
              {cleanedPostDesc}
            </p>
            <br />
            <br />
            <div id="dropdown-holder">
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  data-toggle="dropdown"
                  id="dropdownMenuButton"
                  type="button"
                  color='danger'
                >
                  Share This Post!
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                  <FacebookShareButton url={pathName} >
                    <FacebookIcon className='social-icon'/>
                  </FacebookShareButton>
                  <FacebookShareButton url={pathName}>
                    <FacebookMessengerIcon className='social-icon'/>
                  </FacebookShareButton>
                  <EmailShareButton url={pathName}>
                    <EmailIcon className='social-icon'/>
                  </EmailShareButton>
                  <TumblrShareButton url={pathName}>
                    <TumblrIcon className='social-icon'/>
                  </TumblrShareButton>
                  <WhatsappShareButton url={pathName}>
                    <WhatsappIcon className='social-icon'/>
                  </WhatsappShareButton>
                  <PinterestShareButton url={pathName}>
                    <PinterestIcon className='social-icon'/>
                  </PinterestShareButton>
                  <TwitterShareButton url={pathName}>
                    <TwitterIcon className='social-icon'/>
                  </TwitterShareButton>
                  <RedditShareButton url={pathName}>
                    <RedditIcon className='social-icon'/>
                  </RedditShareButton>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
