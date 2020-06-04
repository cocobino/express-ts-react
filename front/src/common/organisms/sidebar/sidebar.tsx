import React from 'react';
import ImageButton from '../../atoms/imageBtn/imageButton';
import './sidebar.css';
import FriendImg from '../../../resource/image/friendIcon.png';
import ChatImg from '../../../resource/image/chatIcon.png'
import {BrowserRouter as Link } from 'react-router-dom';

function Header() : any {
  const btnCss = {
    'padding': '21px'
  }

  return (
    <>
      <div className="sidebar">
        <Link to="/friend">
          <ImageButton imageSrc={FriendImg}  alt={'친구'} css={btnCss} type={'friend'}/>
        </Link>
        <Link to="/chat">
          <ImageButton imageSrc={ChatImg} alt={'채팅'} css={btnCss} type={'chat'}/>
        </Link>
      </div>
    </>
  );
}


export default Header;