import React, { Component } from 'react';
import { Route } from 'react-router';
import { Login } from './components/Login/Login';
import { Layout } from './components/Layout';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Login />
        
        </Layout>
    );
  }
}
