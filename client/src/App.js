import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import { AuthProvider } from "./context/auth"
// import AuthRoute from './util/AuthRoute'

import MenuBar from './components/MenuBar'
import flow from './pages/flow'
import Register from './pages/Register'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import Subscription from './pages/Subscription'


import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/flow" component={flow} />
          <Route exact path="/subscription" component={Subscription} />
        </Container>
      </Router>
    </AuthProvider>
  );
}
