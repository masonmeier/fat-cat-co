import React from 'react';
import Header from '../components/Header';

const HomepageLayout = props => {
  return (
    <div className="seventy-five-percent-height">
      <Header {...props} />
      {props.children}
    </div>
  );
};

export default HomepageLayout;