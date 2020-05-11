import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import friendListApp from './friendList/friendListApp'
import ChatListApp from './chatList/chatListApp';

class mainChat extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/friendList" >friendList</Link></li>
                    <li><Link to="/ChatList" >ChatList</Link></li>
                </ul>

                <Route path="/friendList" component={friendListApp}/>
                <Route path="/ChatList" component={ChatListApp} />
            </Router>
        );
    }
}

export default mainChat;