import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../common/organisms/header/header';
import FriendViewModel from '../ViewModel/friendViewModel';
import '../../../index.css'

import UserDefaultImg from '../../../resource/image/userDefault.png';
import UserDefaultImg2 from '../../../resource/image/userDefault2.png';
import { observer } from 'mobx-react';
import { IFriend } from '../Repository/friendRepository';

const friendView = observer(() => {
    
    const getFriendList: any = FriendViewModel.getFriendList().map((data:IFriend, i:number) => {
    return (
        <Link to="chat" key={i}>
            <li>
                    <img className="friend_image" src={i % 2 === 0 ? UserDefaultImg : UserDefaultImg2}/>
                    <span className="friend_name">{data.name}</span>
                    <span className="friend_message">{data.message}</span>
            </li>
        </Link>
    )});

    return (
        <>
            <Header title={'친구'} placeholder={"이름 검색"}/>
            <div className="mainpage_friend">
                <ul className="mainpage_friendlist">
                    {getFriendList}            
                </ul>
            </div>
        </>
    );
});

export default friendView;