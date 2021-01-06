import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

//layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//style
import './default.scss'

//set initial user state to null
const initialState = {
  currentUser: null
};

class App extends Component {
  //initialize state with the initialState object
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }
//set up event listener for when the user is logged in
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      });
    });
  }
//unmount to prevent memory leaks
  componentWillUnmount() {
    this.authListener();
  }

  render(){
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => (
            <HomePageLayout currentUser={currentUser}>
              <Homepage />
            </HomePageLayout>
          )}/>
          <Route path="/registration" render={() => (
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )}/>
          <Route path="/login"
             render={() => currentUser ? <Redirect to={'/'} /> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
