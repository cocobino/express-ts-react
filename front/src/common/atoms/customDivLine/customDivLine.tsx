import React from 'react';
import './customDivLine.css';
import { observer } from 'mobx-react';

const CustomDivLine = observer(({name, count}) => {

    return (
        <div className="customDivLine">
            <span className="customDivLine_txt">{name}</span>
            <span className="customDivLine_txt">{count}</span>
        </div>
    )
});

export default CustomDivLine;