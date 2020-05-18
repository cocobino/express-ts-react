import React, {useRef} from 'react';
import './imageButton.css';

function ImageButton({imageSrc, alt, css, type}) : any {
  return (
      <button className="ImageBtn" style={css} >
        <img src={imageSrc} alt={alt} />
      </button>
  );
}

export default ImageButton;