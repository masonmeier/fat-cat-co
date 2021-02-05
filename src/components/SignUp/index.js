import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { signUpUserStart, googleSignInStart } from '../../redux/User/user.actions';
import LoginBackground from '../../assets/images/directory/sacramento.png'
import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import {Card, CardTitle, Col, Container, Form, Input, Row} from 'reactstrap';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
})

const SignUp = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState)
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/')
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  }


  const handleFormSubmit = event => {
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
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

    const configAuthWrapper = {
      headline: 'Sign Up'
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
                  <div className="description">
                    <h3 className="info-header">Access Exclusive Content</h3>
                    <p>
                      Get access to ROMAN's blog. See exclusive postings only available
                      to his followers.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="description">
                    <h3 className="info-header">Catch Roman's Releases</h3>
                    <p>
                      Register to be the first to recieve announcements on music releases
                      and projects.
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
              {errors.length > 0 && (
                <ul>
                  {errors.map((err, index) => {
                    return (
                      <li key={index}>
                        {err}
                      </li>
                    );
                  })}
                </ul>
              )}

              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register">
                  <CardTitle id='signup-title' className="text-center" tag="h3">
                    Register
                  </CardTitle>
                  <div className="row">
                    <Button onClick={handleGoogleSignIn} className="btn" color="google">
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
                      <Button type='submit'>
                        Register
                      </Button>
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
      // <AuthWrapper {...configAuthWrapper}>
      //
      //     <div className="form-wrap">
      //
      //       {errors.length > 0 && (
      //         <ul>
      //           {errors.map((err, index) => {
      //             return (
      //               <li key={index}>
      //                 {err}
      //               </li>
      //             );
      //           })}
      //         </ul>
      //       )}
      //
      //       <form onSubmit={handleFormSubmit}>
      //         <FormInput
      //           type='text'
      //           name='displayName'
      //           value={displayName}
      //           placeholder="Full Name"
      //           handleChange={e => setDisplayName(e.target.value)}
      //         />
      //
      //         <FormInput
      //           type='email'
      //           name='email'
      //           value={email}
      //           placeholder="Email"
      //           handleChange={e => setEmail(e.target.value)}
      //         />
      //
      //         <FormInput
      //           type='password'
      //           name='password'
      //           value={password}
      //           placeholder="Password"
      //           handleChange={e => setPassword(e.target.value)}
      //         />
      //
      //         <FormInput
      //           type='password'
      //           name='confirmPassword'
      //           value={confirmPassword}
      //           placeholder="Confirm Password"
      //           handleChange={e => setConfirmPassword(e.target.value)}
      //         />
      //
      //         <Button type='submit'>
      //           Register
      //         </Button>
      //
      //       </form>
      //     </div>
      //   <div className="socialSignin">
      //     <div className="row">
      //       <Button onClick={handleGoogleSignIn}>
      //         Sign up with Google
      //       </Button>
      //     </div>
      //   </div>
      // </AuthWrapper>
    );
}

export default SignUp;