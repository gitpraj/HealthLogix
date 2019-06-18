import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AddBlog } from './components/AddBlog';
import { Blogs } from './components/Blogs';
import { Activity } from './components/Activity';
import { Logout } from './components/logout';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/addblog' component={AddBlog} />
            <Route path='/activity' component={Activity} />
            <Route path='/logout' component={Logout} />
      </Layout>
    );
  }
}
