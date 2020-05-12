import React from 'react';
import {observer, Provider} from 'mobx-react';
import FriendListVM from '../viewModel/friendListVM';
import '../friendListApp.css';
import {Link} from 'react-router-dom';

const Content = observer(() => {
    const friendList = FriendListVM.getInstance() as FriendListVM;
    const onClickEvent = (e : any) => {
        // window.location.href= '/ChatList?id='+e.target.dataset['id'];
        // <Route path='/ChatList' component={chatListApp} />
    }
    const drawFriendList = friendList.getFriendList('id').map((friend, i) => {
        const url = `/ChatList?id=${friend.id}`;
        return <Link to={url} key={i} ><li onClick={onClickEvent}><span className="peopleName">{friend.name}</span> <br /> <span>{friend.msg}</span></li></Link>;
    });
    
    return (
    <ul className="friendList">
        {drawFriendList}
    </ul>
    )
});

const FriendList : any = () => {
    return <Provider friendList = {FriendListVM.getInstance()}><Content /></Provider>;
};

export default FriendList;