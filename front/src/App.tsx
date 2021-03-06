import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import FriendView from './pages/mainBoard/View/friendView';
import ChatView from './pages/mainBoard/View/chatView';
import UserPageView from './pages/mainBoard/View/userPageView'
import LoginView from './pages/mainBoard/View/loginView';
import JoinView from './pages/mainBoard/View/joinView';

function App() : any {
  return (
    <Router>
      <Route exact path="/friend" component={FriendView}/>
      <Route exact path="/chat" component={ChatView}/>
      <Route exact path="/myPage" component={UserPageView}/>
      <Route exact path="/login" render={props => <LoginView />}/>
      <Route exact path="/join" component={JoinView} />
    </Router>
  );
}

export default App;