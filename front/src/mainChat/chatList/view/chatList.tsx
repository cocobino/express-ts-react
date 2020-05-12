import React from 'react';
import {observer, Provider} from 'mobx-react';
import ChatListVM from '../viewModel/chatListVM';
import '../chatListApp.css'

const Content = observer(() => {
    const chatListVM = ChatListVM.getInstance();

    const getChatList = chatListVM.getChatList().map((message, i) => {
    return (<div key={i} className="msg">
            <div className="msgBox">
                <span className="msgName">{message.name}</span> <br />
                <span className="msgContent">{message.content}</span>
            </div>
                <span className="msgTimeLog">{message.time}</span>
            </div>)
        });
        
    const onSubmit = (e : any) => {
        e.preventDefault();
    }


    return (
    <>
    <div className="msgList">
        {getChatList}
    </div>
    <form method="post" onSubmit={onSubmit}>
        <input className="msgInput" type="text" />
        <input className="msgSubmit" type="submit" />
    </form>
    </>
    )
});

const ChatList : any = () => {
    return <Provider chatList = {ChatListVM.getInstance()}><Content /></Provider>
}

export default Content;   