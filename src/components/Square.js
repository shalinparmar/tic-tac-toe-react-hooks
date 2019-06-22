import React from 'react';
import '../App.css';

function Square({value, handleClick}) {

    return (
        <button className="square" 
            onClick={handleClick}>
            {value}
        </button>
    );
}

export default Square;