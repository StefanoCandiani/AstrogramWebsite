import React from 'react';
import CardList from './InstaComponents/CardList.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Login } from './InstaComponents/Login';

function App () {

  return(
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/mainpage">
        <CardList />
      </Route>
      <Redirect />
    </Router>
  )
  
}

export default App;
