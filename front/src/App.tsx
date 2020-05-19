import React from 'react';
import Sidebar from './common/organisms/sidebar/sidebar'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import FriendView from './pages/mainBoard/View/friendView';
import ChatView from './pages/mainBoard/View/chatView';
import UserPageView from './pages/mainBoard/View/userPageView'

function App() : any {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Route exact path="/friend" component={FriendView}/>
      <Route exact path="/chat" component={ChatView}/>
      <Route exact path="/myPage" component={UserPageView}/>
    </Router>
  );
}

export default App;