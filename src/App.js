
////// App.js \\\\\\

import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './InstaComponents/Login';
import CardList from './InstaComponents/CardList';
 
function App () {

  // Visual multi-page system with Login, CardList, and Individual Cards

  return(
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
        <CardList />
      <Redirect to='/' />
    </Router>
  )
  
}

export default App;
