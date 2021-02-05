import React from "react";
import './styles.scss';
import Logo1 from '../../assets/images/directory/roman-logo.jpg';
import Logo2 from '../../assets/images/directory/roman-logo2.png';


class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        Logo1,
        Logo2,
      ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 3000);
  }

  render() {
    return (
      <div className="slideshow-container">
        <img className="logo"
          src={this.state.images[this.state.currentImage]}
          alt="logo"
        />
      </div>
    );
  }
}

export default Logo;