import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { signUpUserStart, googleSignInStart } from '../../redux/User/user.actions';
import LoginBackground from '../../assets/images/directory/sacramento.png'
import './styles.scss';

import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import {Card, CardTitle, Col, Container, Form, Input, Row} from 'reactstrap';
import { toast } from 'react-toastify';
import Switch from 'react-bootstrap-switch';


const mapState = ({ user }) => user;

const SignUp = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser  = useSelector(mapState).currentUser;
  const error = useSelector(mapState).userErr.message;
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [switchOn, setSwitch] = useState(false)

  const notifyError = () => toast(error)
  const notifyRegister = () => toast('Hey There, thanks for signing up! Stay tuned for some cool stuff!');

  useEffect(() => {
    if (currentUser) {
      const emailData = {
        displayName: currentUser.displayName,
        email: currentUser.email
      }
      fetch("http://localhost:5000/registerEmail", {
          method: "post",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(emailData)
        }
      ).then(() => {
         return fetch("http://localhost:5000/notifyRegisterEmail", {
              method: "post",
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(emailData)
            },
          ).then((res) => {
            reset()
            notifyRegister()
            history.push('/')
          })}
      )
    }
    if (error !== null) {
      notifyError(error);
      reset()
    }
  }, [currentUser, error])

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }


  const handleFormSubmit = async (event) => {
    event.preventDefault();
        dispatch(signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword
      }))
  }


  const styles = {
    pageHeader: {
      backgroundImage: `url(${LoginBackground})`
    }
  }
  const handleGoogleSignIn = async () => {
      dispatch(googleSignInStart())
  }

  const handleSwitch = (elem, state) => {
    setSwitch(state)
  }


    return (
      <div className="wrapper">
        <div
          className="page-header"
          style={styles.pageHeader}
        >
          <div className="filter" />
          <Container className='sign-up'>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <h2 className="info-header">On The Rocks Records</h2>
                  <div className="description">
                    <h3 className="info-header">Access Exclusive Content</h3>
                    <p>
                      Get access to ROMAN's blog as well as the blogs of all of
                      our artists all for free! See exclusive postings only available
                      to our followers.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="description">
                    <h3 className="info-header">Catch Roman's Releases</h3>
                    <p>
                      Be the first to receive announcements on music releases
                      and projects from ROMAN and some of the hottest artists in the
                      industry.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="description">
                    <h3 className="info-header">Your Info Is Protected</h3>
                    <p>
                      All registration is handled through Google Firebase's
                      secure authentication system and your information will
                      never be shared.
                    </p>
                  </div>
                </div>
              </Col>

              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register">
                  <CardTitle id='signup-title' className="text-center" tag="h3">
                    Register
                  </CardTitle>
                  <div className="row">
                    <Button
                      disabled={!switchOn}
                      onClick={handleGoogleSignIn} className="btn" color="google">
                      Register with Google
                    </Button>
                  </div>
                  <div className="division">
                    <div className="line l" />
                    <div className="row">
                      <span className="or">or</span>
                    </div>
                    <div className="line r" />
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <FormInput
                      className='login-info'
                      type='text'
                      name='displayName'
                      value={displayName}
                      placeholder="Full Name"
                      handleChange={e => setDisplayName(e.target.value)}
                    />

                    <FormInput
                      className='login-info'
                      type='email'
                      name='email'
                      value={email}
                      placeholder="Email"
                      handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                      className='login-info'
                      type='password'
                      name='password'
                      value={password}
                      placeholder="Password"
                      handleChange={e => setPassword(e.target.value)}
                    />

                    <FormInput
                      className='login-info'
                      type='password'
                      name='confirmPassword'
                      value={confirmPassword}
                      placeholder="Confirm Password"
                      handleChange={e => setConfirmPassword(e.target.value)}
                    />

                    <div className="row">
                      <Button
                        type='submit'
                        disabled={!switchOn}
                      >
                        Register
                      </Button>
                    </div>
                    <div className="row switch-row">
                      <Switch
                        onChange={(el, state) => handleSwitch(el, state)} name='eula'
                        className='switch'
                        defaultValue={false}
                        offColor="black"
                        offText="No"
                        onColor="danger"
                        onText="Yes"
                      />
                      <a target="_blank" href="https://www.google.com/" className="switch-text">
                        I have read and accept the End-user license agreement.
                      </a>
                    </div>

                  </form>

                  <div className="row">
                    <p className="log-in">
                      Already have an account?{" "}
                      <Link id='login-link' to='/login'>login</Link>
                      .
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
}

export default SignUp;