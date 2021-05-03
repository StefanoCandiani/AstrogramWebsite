import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './InstaComponents/Login';

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
      <Redirect to='/' />
    </Router>
  )
  
}

export default App;
