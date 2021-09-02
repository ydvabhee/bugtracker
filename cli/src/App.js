import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Profile from './components/profile'
import Authentication from './components/auth/authentication';

import './App.css';




export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <Route exact path="/" component = {Authentication}/>
          <Route exact path="/login" render = {() => <Authentication setTo={"login"}/> }/>
          <Route exact path="/register" >
            <Authentication setTo="register"/>
          </Route>
          <Route exact path="/profile" component = {Profile}/>
        </Router>
        </Provider>
    );
  }
}
