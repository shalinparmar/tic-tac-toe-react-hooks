import React from 'react';
import '../App.css';

function Square({value, isWinningSquare, handleClick}) {

    return (
        <button className={isWinningSquare ? "winner-square" : "square"} 
            onClick={handleClick}>
            {value}
        </button>
    );
}

export default Square;