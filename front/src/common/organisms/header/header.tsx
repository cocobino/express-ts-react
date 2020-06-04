import React from 'react';
import './header.css';
import SearchInput from '../../atoms/searchInput/searchInput'
import { observer } from 'mobx-react';

const Header= observer(({title, placeholder}) : any => {
  return (
    <div className="mainpage_header">
        <h1 className="mainpage_title">{title}</h1>
        <SearchInput placeholder={placeholder}/>
    </div>
  );
});

export default Header;