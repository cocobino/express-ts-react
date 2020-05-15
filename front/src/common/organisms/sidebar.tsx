import React from 'react';
import ImageButton from '../atoms/imageButton';
import './sidebar.css';
import FriendImg from '../../resource/image/friendIcon.png';
import ChatImg from '../../resource/image/chatIcon.png'

function Header() : any {
  const btnCss = {
    'padding': '21px'
  }
  return (
    <div className="sidebar">
      <ImageButton imageSrc={FriendImg} alt={'친구'} css={btnCss}/>
      <ImageButton imageSrc={ChatImg} alt={'친구'} css={btnCss}/>
    </div>
  );
}

export default Header;