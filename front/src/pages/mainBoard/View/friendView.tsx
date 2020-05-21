import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../common/organisms/header/header';
import FriendViewModel from '../ViewModel/friendViewModel';
import List from '../../../common/molecules/List/List';
import CustomDivLine from '../../../common/atoms/customDivLine/customDivLine';
import '../../../index.css'

import UserDefaultImg from '../../../resource/image/userDefault.png';
import UserDefaultImg2 from '../../../resource/image/userDefault2.png';
import { observer } from 'mobx-react';
import { IFriend } from '../Repository/friendRepository';
import Sidebar from '../../../common/organisms/sidebar/sidebar';

const friendView = observer(() => {
    //getFriendList
    const getFriendList: any = FriendViewModel.getFriendList();
    const drawFriendList = getFriendList.map(( data:IFriend, i:number ) => 
     <List key={i+1} userImage = {UserDefaultImg} name = {data.name} message = {data.message} url={'/chat'} type={'friend'} time={''}/>
    );

    //tmp
    const myPageList = <List key={0} userImage ={UserDefaultImg2} name = {'이대경'} message={'대화명'} url={'/myPage'} type={'myPage'} time={''} />

    return (
        <>
            <Header title={'친구'} placeholder={"이름 검색"}/>
            <Sidebar />

            <div className="mainpage">
                <ul className="mainpage_List">
                     {myPageList}
                    <CustomDivLine name={'친구'} count={getFriendList.length}/>
                    {drawFriendList}            
                </ul>
            </div>
        </>
    );
});

export default friendView;