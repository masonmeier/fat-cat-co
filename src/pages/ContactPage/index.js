import React from 'react';
import Contact from '../../components/Contact/index';
import './styles.scss'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return(
      <div>
        <Contact  />
        {/*onSubmit = {this.handleSubmit}*/}
      </div>
    )
  }
}
export default ContactPage
