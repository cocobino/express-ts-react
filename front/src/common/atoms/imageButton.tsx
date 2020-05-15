import React from 'react';
import './imageButton.css';

function ImageButton({imageSrc, alt, css, link}) : any {
  return (
    <button className="ImageBtn" style={css}>
      <img src={imageSrc} alt={alt}/>
    </button>
  );
}

export default ImageButton;