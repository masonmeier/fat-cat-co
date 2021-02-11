import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {emailSignInStart, googleSignInStart, userError} from '../../redux/User/user.actions';

import './styles.scss';
import LoginBackground from '../../assets/images/directory/sacramento.png'

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import Header from '../Header';
import {Card, CardTitle, Col, Container, Form, Input, Row} from 'reactstrap';


// const mapState = ({ user }) => ({
//   currentUser: user.currentUser
// });

const mapUser = ({ user }) => ({
  currentUser: user.currentUser
});

const mapError = ({ user }) => ({
  error: user.userErr
});

const SignIn = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapUser);
  const error = useSelector(mapError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');


  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setResponse('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(emailSignInStart({email, password, response}));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());

  }

  const styles = {
    pageHeader: {
      backgroundImage: `url(${LoginBackground})`
    }
  }

    // const configAuthWrapper = {
    //   headline: 'LogIn'
    // }

    return (
        <div className="wrapper">
          <div
            className="page-header"
            style={styles.pageHeader}
          >
            <div className="filter" />
            <Container className='login-container'>
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                  <Card className="card-register">
                    <CardTitle id='login-title' className='card-title' tag="h3">Welcome</CardTitle>
                    <form onSubmit={handleSubmit}>
                      <FormInput
                        className='login-info'
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                      />

                      <FormInput
                        className='login-info'
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                      />
                      {/*{error !== null && (*/}
                      {/*  <div>*/}
                      {/*    {error}*/}
                      {/*  </div>*/}
                      {/*)}*/}

                      <div className="row">
                        <Button type='submit'>
                          LogIn
                        </Button>
                      </div>

                    </form>

                      <div className="socialSignIn">
                        <div className="row">
                          <Button onClick={handleGoogleSignIn}>
                            Sign in with Google
                          </Button>
                        </div>
                      </div>
                    <div className="row">
                      <Link id='btn-link' className="btn-link" to='/recovery'>
                        Reset Password
                      </Link>
                    </div>

                    <div className="forgot">
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

      // <AuthWrapper {...configAuthWrapper}>
      //     <div className="formWrap">
      //       <form onSubmit={handleSubmit}>
      //         <FormInput
      //           type="email"
      //           name="email"
      //           value={email}
      //           placeholder="Email"
      //           handleChange={e => setEmail(e.target.value)}
      //         />
      //
      //         <FormInput
      //           type="password"
      //           name="password"
      //           value={password}
      //           placeholder="Password"
      //           handleChange={e => setPassword(e.target.value)}
      //         />
      //
      //         <Button type='submit'>
      //           LogIn
      //         </Button>
      //
      //         <div className="socialSignIn">
      //           <div className="row">
      //             <Button onClick={handleGoogleSignIn}>
      //               Sign in with Google
      //             </Button>
      //           </div>
      //         </div>
      //
      //         <div className="links">
      //           <Link to='/recovery'>
      //             Reset Password
      //           </Link>
      //         </div>
      //       </form>
      //     </div>
      // </AuthWrapper>
    );
}

export default SignIn;