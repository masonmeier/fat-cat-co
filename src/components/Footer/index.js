import React from 'react';
import './styles.scss';
import AudioWidget from '../SoundCloud/AudioWidget';

const Footer = props => {
  return (
    <footer className="footer">
      {/*<div className="widget-wrap">*/}
      {/*  <AudioWidget />*/}
      {/*</div>*/}
      <div className="title-wrap">
        <h3>
          ©On The Rocks
        </h3>
      </div>
    </footer>
  );
};

export default Footer;