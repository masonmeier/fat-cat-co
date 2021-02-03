import React from "react";

import Sacramento from '../../assets/images/directory/sacramento.jpg';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import './styles.scss'

// core components
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import FullBackgroundCard from '../../components/FullBackgroundCard';
import AboutPageHeader from '../../AboutPageHeader';

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
