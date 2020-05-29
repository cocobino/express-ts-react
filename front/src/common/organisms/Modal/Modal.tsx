import React, { useState } from 'react';
import {observer} from 'mobx-react';
import './Modal.css';
import SearchFriendViewModel from '../../../pages/mainBoard/ViewModel/serachFriendViewModel';


const SearchFriend= observer(() => {
    
    const onKeyDown = (e : any) : void => {
        const id = e.target.value;
        if(e.key ==='Enter') {
            SearchFriendViewModel.searchFriend(id);
        }
    }

    const friendData = SearchFriendViewModel.SearchFriendData ? 
    (<div>테스트</div>) :
     '등록된 친구가 없습니다.';
    debugger;
    return (
        <>
            <input className="modalPage_input" type="text" onKeyDown={onKeyDown}/>
            <div className="modalPage_state">{friendData}</div>
        </>
    )
});


const Modal = observer(({opt}) => {
    
        return (
        <div style={opt.show ? {display : 'block'} : {display : 'none'}}>
            <div className="maskingPage"></div>
            <div className="modalPage">
                {/* header */}
               <div className="modalPage_header">
                    <button className="modalPage_header_closeBtn" type="button" onClick={opt.closeModal}></button>
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