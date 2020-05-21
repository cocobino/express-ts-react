import React from 'react';
import './input.css';

function Input(param) {
    return (
        <>
            <input className={param.css + ' input'} type={param.type} placeholder={param.placeholder} name={param.name} value={param.value} />
        </>
    )
}

export default Input;