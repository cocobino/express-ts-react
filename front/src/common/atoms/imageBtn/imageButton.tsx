import React from 'react';
import './imageButton.css';
import { observer } from 'mobx-react';

const ImageButton = observer(({imageSrc, alt, css, type}) => {
  return (
      <button className="ImageBtn" style={css} >
        <img src={imageSrc} alt={alt} />
      </button>
  );
});

export default ImageButton;