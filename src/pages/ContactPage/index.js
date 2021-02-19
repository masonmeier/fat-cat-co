import React from 'react';
import Contact from '../../components/Contact/index';
import './styles.scss'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div>
        <Contact  />
      </div>
    )
  }
}
export default ContactPage
