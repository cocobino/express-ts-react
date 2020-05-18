import React from 'react';
import './header.css';
import SearchInput from '../../atoms/searchInput/searchInput'

function Header({title, placeholder}) : any {
  return (
    <div className="mainpage_header">
        <h1 className="mainpage_title">{title}</h1>
        <SearchInput placeholder={placeholder}/>
    </div>
  );
}

export default Header;