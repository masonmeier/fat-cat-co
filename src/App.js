import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

//layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//style
import './default.scss'

function App() {
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
        </Switch>
    </div>
  );
}

export default App;
