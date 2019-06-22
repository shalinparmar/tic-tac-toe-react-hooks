import React from 'react';
import '../App.css';

import Square from './Square';

function Board({squares, handleClick}) {

    function renderSquare(i) {
        return <Square key={i}
        value={squares[i]} 
        handleClick={() => handleClick(i)} />;
    }

    return (
        <div>
            {drawBoard().map(b => b)}
        </div>
    );

    function drawBoard() {
        let board = [];
        let index = 0;
        for (let col = 0; col < 3; col++) {
            let renderSquares = [];
            for (let row = 0; row < 3; row++) {
                renderSquares.push(renderSquare(index++));
            }
            board.push(<div className="board-row" key={col}>{renderSquares.map(s => s)}</div>)
        }
        return board;
    }
}

export default Board;