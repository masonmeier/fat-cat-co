import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePageLayout = props => {
  return (
    <div className="full-height">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;