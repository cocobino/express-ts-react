import React from 'react';
import UserLoginApp from './userLogin/userLoginApp'
import MainChatApp from './mainChat/mainChatRouter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './common/css/App.css';

function App() : any {
  return (
    <Router>
      <div className="background">
        <Link to="/"></Link>
        <Link to="/mainChat"></Link>
        <Route exact path="/" component={UserLoginApp} />
        <Route path="/mainChat" component={MainChatApp}></Route>
      </div>
    </Router>
  );
}

export default App;