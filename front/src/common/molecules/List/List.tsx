import React from 'react';
import './List.css';
import {Link, Redirect} from 'react-router-dom';
import {observer} from 'mobx-react';
import chatViewModel from '../../../pages/mainBoard/ViewModel/chatViewModel';

const List = observer(({id, userImage, name, message, url, type, time}) => {
  
  const onClick = () => {
    chatViewModel.loadChatData(sessionStorage.getItem('id'), id);
  }

  if(chatViewModel.getChatData()) {
    return <Redirect to='/sendbox' />;
  }

  return (
    <li className={type} onClick={onClick}>
              <img className={type+'_image'} src={userImage}/>
              <span className={type+'_name'}>{name}</span>
              <span className={type+'_message'}>{message}</span>
              {time ? <span className={type+'_time'}>{time}</span> : ''}
      </li>
  );
});

export default List;