import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { connect } from 'react-redux';
//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Catalog from './pages/Catalog';
import Dashboard from './pages/Dashboard';

// higher order component (hoc)
import WithAuth from './hoc/withAuth';

//layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//style
import './default.scss'
import About from './pages/About';

import {setCurrentUser} from './redux/user/user.actions';

const App = props => {
  const { setCurrentUser, currentUser } = props;


  useEffect(() => {

    const { setCurrentUser } = props;

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
  }, [])


    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => (
            <HomePageLayout>
              <Homepage />
            </HomePageLayout>
          )}/>
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}/>
          <Route path="/login"
             render={() => (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
          )}/>
          <Route path="/recovery"
                 render={() => (
                   <MainLayout>
                     <Recovery />
                   </MainLayout>
                 )}/>
          <Route path="/about"
                 render={() => (
                   <MainLayout currentUser={currentUser}>
                     <About />
                   </MainLayout>
                 )}/>
          <Route path="/catalog"
                 render={() => (
                   <MainLayout currentUser={currentUser}>
                     <Catalog />
                   </MainLayout>
                 )}/>
          <Route path="/dashboard"
                 render={() => (
                   <WithAuth>
                     <MainLayout>
                       <Dashboard />
                     </MainLayout>
                   </WithAuth>
                 )}/>
        </Switch>
      </div>
    );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
