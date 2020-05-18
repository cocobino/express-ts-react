import React from 'react';
import Sidebar from './common/organisms/sidebar/sidebar'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import FriendView from './pages/mainBoard/View/friendView';
import chatView from './pages/mainBoard/View/chatView';

function App() : any {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Route exact path="/friend" component={FriendView}/>
      <Route exact path="/chat" component={chatView}/>
    </Router>
  );
}

export default App;