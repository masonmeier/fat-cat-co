import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.scss'
import {Button, Col, Container, Form, Input, Row} from 'reactstrap';
import ContactBackground from '../../assets/images/directory/sacramento.png';
import {useDispatch} from 'react-redux';
import axios from 'axios';


//toastify notification
import { toast } from 'react-toastify';

//needs to be changed to emails.actions
import {addEmailStart} from '../../redux/Email/email.actions';
import FormInput from '../../components/forms/FormInput';

const Contact = props => {
  const history = useHistory();
  const notify = () => toast('Email Submitted Successfully!')
  const dispatch = useDispatch();
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const resetForm = () => {
    setContactFirstName('');
    setContactLastName('');
    setContactEmail('');
    setContactSubject('');
    setContactMessage('');
  };

  const handleSubmit = async (e) => {
    console.log('handleSubmit is called')
    e.preventDefault();
    // const response = await fetch("/contactmail", {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     contactMessage,
    //     contactSubject,
    //     contactEmail,
    //     contactFirstName,
    //     contactLastName
    //   })
    // });
    // const resData = await response.json();
    // if (resData.status === 'success'){
    //   alert("Message Sent.");
    // }else if(resData.status === 'fail'){
    //   alert("Message failed to send.")
    // }
    dispatch(
      addEmailStart({
        to: 'ontherocksroman@gmail.com',
        message: {
          subject: contactSubject,
          html: contactMessage,
        },
        contactFirstName,
        contactLastName,
        contactEmail,
        contactSubject,
        contactMessage,
      })
    );
    notify();
    resetForm();
    history.push('/')
  };

  const styles = {
    pageHeader: {
      backgroundImage: `url(${ContactBackground})`
    }
  }

  return(
    <div className="main"
    >
      <div className="section"
           style={styles.pageHeader}>
        <Container className='contact-container'>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title contact-text">Get in touch</h2>
              <p className="contact-text">
                Want to contact ROMAN about collabs, production opportunities and more?
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h3 className="title ">
                <small className="contact-text">Drop him a note</small>
              </h3>
              <Form className="contact" onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormInput className='contact-input' placeholder="First Name" type="text"
                               value={contactFirstName}
                               handleChange={e => setContactFirstName(e.target.value)}/>
                  </Col>
                  <Col md="6">
                    <FormInput className='contact-input' placeholder="Last Name" type="text"
                               value={contactLastName}
                               handleChange={e => setContactLastName(e.target.value)}/>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormInput className='contact-input' placeholder="Email" type="text"
                               value={contactEmail}
                               handleChange={e => setContactEmail(e.target.value)}/>
                  </Col>
                  <Col md="6">
                    <FormInput className='contact-input' placeholder="Subject" type="text"
                               value={contactSubject}
                               handleChange={e => setContactSubject(e.target.value)}/>
                  </Col>
                </Row>
                <FormInput className='contact-input' placeholder="Message" rows="7" type="textarea"
                           value={contactMessage}
                           handleChange={e => setContactMessage(e.target.value)}/>
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <Button block type="submit" className="btn-round" color="danger">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact;