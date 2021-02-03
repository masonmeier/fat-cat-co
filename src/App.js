import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// components
import AdminToolbar from './components/AdminToolbar';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import Blog from './pages/Blog';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import PostDetails from './pages/PostDetails';
import './default.scss';

//artist specific imports
import About from '../src/pages/About'
import Catalog from './pages/Catalog';
import Footer from './components/Footer';



const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <div className="full-height">
        <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/about" render={() => (
             <MainLayout>
               <About />
             </MainLayout>
           )}/>
          <Route path="/catalog" render={() => (
             <MainLayout>
               <Catalog />
             </MainLayout>
           )}/>
          <Route exact path="/blog" render={() => (
            <WithAuth>
              <MainLayout>
                <Blog/>
              </MainLayout>
            </WithAuth>
          )} />
          <Route path="/blog/:filterType" render={() => (
            <WithAuth>
              <MainLayout>
                <Blog />
              </MainLayout>
            </WithAuth>
          )} />
          <Route path="/post/:postID" render={() => (
            <MainLayout>
              <PostDetails />
            </MainLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
          <Route path="/login"
                 render={() => (
                   <MainLayout>
                     <Login />
                   </MainLayout>
                 )} />
          <Route path="/recovery" render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )} />
          <Route path="/dashboard" render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )} />
          <Route path="/admin" render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )} />
        </Switch>
        <Footer />
        <AdminToolbar />
      </div>
    </div>
  );
}

export default App;