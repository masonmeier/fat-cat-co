import React from 'react';
import './styles.scss';
import Button from '../../components/forms/Button';

const Catalog = props => {
  return (
    <div className="catalog-page">
      <div className="soundcloud-wrap">
        <h1>
          Soundcloud
        </h1>
        <Button>
          Visit SoundCloud
        </Button>
      </div>
      <div className="blog-wrap">
        <h1>
          Blog
        </h1>
        <p>
          Sign up to see Romans story and interact with him directly by commenting on his posts and exclusive music releases!
        </p>
        <Button>
          Join Blog
        </Button>
      </div>
      <div className="band-camp-wrap">
        <h1>
          Band Camp
        </h1>
        <Button>
          Visit Band Camp
        </Button>
      </div>
    </div>
  )
}

export default Catalog;