import React from 'react';
import './List.css';
import {Link} from 'react-router-dom';

function List({userImage, name, message, url, type, time}) : any {
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
}

export default List;