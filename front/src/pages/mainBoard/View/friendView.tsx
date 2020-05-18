import React from 'react';
import {BrowserRouter as Link } from 'react-router-dom';

import Header from '../../../common/organisms/header/header';
import FriendViewModel from '../ViewModel/friendViewModel';
import '../../../index.css'

import UserDefaultImg from '../../../resource/image/userDefault.png';
import UserDefaultImg2 from '../../../resource/image/userDefault2.png';

function friendView() {
    const friendViewModel = FriendViewModel.getInstance();
    const friendList = friendViewModel.getFriendList().map((data, i) => {
    return (
    <Link to="chat" key={i}>
        <li>
            <img src={i % 2 === 0 ? UserDefaultImg : UserDefaultImg2}/>
            <span>{data.name}</span><br />
            <span>{data.message}</span>
        </li>
    </Link>
    )});

    return (
        <>
            <Header title={'친구'} placeholder={"이름 검색"}/>
            <div className="mainpage_friend">
                <ul className="mainpage_friendlist">
                    {friendList}            
                </ul>
            </div>
        </>
    );
}

export default friendView;