import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';


const Post = (post) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    postThumbnail,
    postName,
    postPrice
  } = post;
  if (!documentID || !postThumbnail || !postName ||
    typeof postPrice === 'undefined') return null;

  return (
    <div className="post">
      <div className="thumb">
        <Link to={`/post/${documentID}`}>
          <img src={postThumbnail} alt={postName} />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/post/${documentID}`}>
                {postName}
              </Link>
            </span>
          </li>
          <li>
            <span className="price">
              £{postPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(post)}>
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Post;
