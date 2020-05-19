import React from 'react';
import './userPage.css';
import Img from '../../../resource/image/tmpBackground.jpg';
import userImg from '../../../resource/image/mypageDefault.png';

function UserPage() {
    return (
        <div className="userPage">
            <div className="userPage_mask">
                <img src={Img} />
            </div>
            
            <button className="userPage_profileImage">
                <img className="userPage_userImage" src={userImg} />
            </button>

            <div className="userPage_footer">
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default UserPage;