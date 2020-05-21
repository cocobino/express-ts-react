import React from 'react';
import {observer} from 'mobx-react'

import '../../../index.css';
import Header from '../../../common/organisms/header/header';
import chatViewModel from '../ViewModel/chatViewModel';
import List from '../../../common/molecules/List/List';

import { IChat } from '../Repository/chatRepository';
import UserDefaultImg from '../../../resource/image/userDefault.png';
import Sidebar from '../../../common/organisms/sidebar/sidebar';

const chatView = observer(() => {
        //getChatList
        const getChatList : any = chatViewModel.getChatList().map((data:IChat, i:number) => 
            <List key={i} userImage = {UserDefaultImg} name ={data.title} message = {data.preview} url={'/chatContent'} type={'chatList'} time={data.time}/>
        );
    
        return (
            <>
            <Header title={'채팅'} placeholder={'채팅방 이름, 참여자 검색'}/>
            <Sidebar />
            <div className="mainpage">
                <ul className="mainpage_List">
                    {getChatList}
                </ul>
            </div>
            </>
        );
});

export default chatView; 