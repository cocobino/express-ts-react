import React, { useState, useEffect } from 'react';

import Header from '../../../common/organisms/header/header';
import FriendViewModel from '../ViewModel/friendViewModel';
import List from '../../../common/molecules/List/List';
import CustomDivLine from '../../../common/atoms/customDivLine/customDivLine';
import '../../../resource/css/friendView.css';

import UserDefaultImg from '../../../resource/image/userDefault.png';
import UserDefaultImg2 from '../../../resource/image/userDefault2.png';
import { observer } from 'mobx-react';
import { IFriend } from '../Repository/friendRepository';
import Sidebar from '../../../common/organisms/sidebar/sidebar';
import ModalViewModel from '../../../common/organisms/Modal/ModalViewModel';
import Modal from '../../../common/organisms/Modal/Modal';



const friendView = observer(() => {
    
    const myInfo = FriendViewModel.getMyInfo;
    
    //getFriendList
    const getFriendList: any = FriendViewModel.getFriendList();
    const drawFriendList = getFriendList.map(( data:IFriend, i:number ) => 
     <List key={i+1} id = {data.id} userImage = {UserDefaultImg} name = {data.name} message = {data.message} url = {'/chat'} type = {'friend'} time = {''}/>
    );
    
    const onClick = ():any => {
        ModalViewModel.showModal();
    }
    
    

    return (
        <>
            <Header title={'친구'} placeholder={"이름 검색"}/>
            <Sidebar />
            <button className="mainpage_addFriendBtn" onClick={onClick}></button>
            <div className="mainpage">
                <ul className="mainpage_List">
                    <List id={''} key={0} userImage ={UserDefaultImg2} name={myInfo.name} message={myInfo.message} url={'/myPage'} type={'myPage'} time={''}/>
                    <CustomDivLine name={'친구'} count={getFriendList.length}/>
                    {drawFriendList}            
                </ul>
            </div>

            <Modal />
        </>
    );
});

export default friendView;