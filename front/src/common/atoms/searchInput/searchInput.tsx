import React from 'react';
import './searchInput.css';

function searchInput({placeholder}) : any {
  return (
    <input type="search" className="header_search" placeholder={placeholder}/>
  );
}

export default searchInput;