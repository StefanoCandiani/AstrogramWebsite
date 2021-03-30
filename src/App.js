import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CardList from './InstaComponents/CardList.js';
import { Login, contactData } from './InstaComponents/Login';
import DailyImage from './InstaComponents/DailyImage';

console.log(contactData)
 
function App () {

  // Visual multi-page system with Login, CardList, and Individual Cards

  return(
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/mainpage">
        <DailyImage />
        <CardList />
      </Route>
      <Redirect/>
    </Router>
  )
  
}

export default App;
