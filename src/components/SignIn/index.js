import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';

import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
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
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({post: {email, password}}),
      });
      const body = await response.text();
      setResponse(body);

    } catch (err) {
      //console.log(err);
    }
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

    const configAuthWrapper = {
      headline: 'LogIn'
    }

    return (
      <AuthWrapper {...configAuthWrapper}>
          <div className="formWrap">
            <form onSubmit={handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={e => setEmail(e.target.value)}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={e => setPassword(e.target.value)}
              />

              <Button type='submit'>
                LogIn
              </Button>

              <div className="socialSignIn">
                <div className="row">
                  <Button onClick={handleGoogleSignIn}>
                    Sign in with Google
                  </Button>
                </div>
              </div>

              <div className="links">
                <Link to='/recovery'>
                  Reset Password
                </Link>
              </div>
            </form>
          </div>
      </AuthWrapper>
    );
}

export default SignIn;