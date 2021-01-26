import React from 'react';
import { Link } from 'react-router-dom';
import Button from './../../forms/Button';

const Post = ({
                   documentID,
                   postThumbnail,
                   postName,
                   postPrice
                 }) => {
  if (!documentID || !postThumbnail || !postName ||
    typeof postPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

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
              <Button {...configAddToCartBtn}>
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