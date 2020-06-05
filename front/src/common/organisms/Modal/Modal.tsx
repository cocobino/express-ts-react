import React, { useState } from 'react';
import {observer} from 'mobx-react';
import ModalViewModel from './ModalViewModel';
import './Modal.css';
import searchFriendViewModel from '../../../pages/mainBoard/ViewModel/searchFriendViewModel';
import DefaultUser from '../../../resource/image/userDefault.png';

const SearchFriend = observer(() => {
    const onKeyDown = (e : any) : void => {
        if(e.key ==='Enter') {
            searchFriendViewModel.loadserachFriend(e.target.value);
        }
    }

    const onClick = () => { 
        searchFriendViewModel.AddSearchFriend();
        ModalViewModel.closeModal();
    }

    //친구가있을경우
    const msg = searchFriendViewModel.getSearchFriend() === 'empty' ? 'ID를 입력해 친구를 검색하세요.' : 
    ( <div className="searchFriend_Img">
        <img src={DefaultUser} />
        <div>{searchFriendViewModel.getSearchFriend()}</div>
        <button className="searchFriend" onClick={onClick}>친구추가</button>
    </div> );

    return (
        <>
            <input className="modalPage_input" type="text" onKeyDown={onKeyDown}/>
            <div className="modalPage_state">{msg}</div>
        </>
    )
});


const Modal = observer(() => {


        const onClick = () :any => {
            ModalViewModel.closeModal();
        }
        
        return (
        <div style={ModalViewModel.getOnOff ? {display : 'block'} : {display : 'none'}}>
            <div className="maskingPage"></div>
            <div className="modalPage">
                {/* header */}
               <div className="modalPage_header">
                    <button className="modalPage_header_closeBtn" type="button" onClick={onClick}></button>
                    <h1 className="modalPage_header_h1">친구추가</h1>
                </div> 
                {/* body */}
                <span className="modalPage_body_span">ID로 추가</span>
                <hr className="line"></hr>
                <div className="modalPage_body">
                    <SearchFriend />
                </div>
            </div>
        </div>
    )
});


export default Modal;