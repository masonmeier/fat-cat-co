//v1
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostStart, setPost } from '../../redux/Posts/posts.actions';
import Button from './../forms/Button';
// import './styles.scss';

const mapState = state => ({
  post: state.postsData.post
});

const PostCard = ({}) => {
  const dispatch = useDispatch();
  const { postID } = useParams();
  const { post } = useSelector(mapState);

  const {
    postThumbnail,
    postName,
    postPrice,
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

  const configAddToCartBtn = {
    type: 'button'
  }

  return (
    <div className="postCard">
      <div className="hero">
        <img src={postThumbnail} />
      </div>
      <div className="postDetails">
        <ul>
          <li>
            <h1>
              {postName}
            </h1>
          </li>
          <li>
            <span>
              £{postPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn}>
                Add to cart
              </Button>
            </div>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: cleanedPostDesc }} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostCard;