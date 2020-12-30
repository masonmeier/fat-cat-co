import React from "react";
import './styles.scss';
import Logo1 from '../../assets/images/logos/cat1.png';
import Logo2 from '../../assets/images/logos/cat2.png';
import Logo3 from '../../assets/images/logos/cat3.png';
import Logo4 from '../../assets/images/logos/cat4.png';


class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        Logo1,
        Logo2,
        Logo3,
        Logo4
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