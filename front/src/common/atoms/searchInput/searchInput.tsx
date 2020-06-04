import React from 'react';
import './searchInput.css';
import { observer } from 'mobx-react';

const searchInput = observer(({placeholder}) : any => {
  return (
    <input type="search" className="header_search" placeholder={placeholder}/>
  );
});

export default searchInput;