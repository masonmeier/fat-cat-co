import React from "react";

import Sacramento from '../../assets/images/directory/sacramento.png';

// reactstrap components


import './styles.scss'

// core components
import AboutPageHeader from '../../components/AboutPageHeader';

function About() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("landing-page");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("landing-page");
      };
    });

  const styles = {
    background: {
      backgroundImage: `url(${Sacramento})`
    }
  }

  return (
    <div className="fill-page">
      <AboutPageHeader />
    </div>
  );
}

export default About;
