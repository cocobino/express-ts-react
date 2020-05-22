import React from 'react';
import './List.css';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

const List = observer(({userImage, name, message, url, type, time}) => {
  return (
    <Link to={url}>
        <li className={type}>
              <img className={type+'_image'} src={userImage}/>
              <span className={type+'_name'}>{name}</span>
              <span className={type+'_message'}>{message}</span>
              {time ? <span className={type+'_time'}>{time}</span> : ''}
        </li>
    </Link>
  );
});

export default List;