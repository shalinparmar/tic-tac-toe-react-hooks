import React, {useState} from 'react';
import '../App.css';

import Board from './Board';
import Moves from './Moves';

function Game() {

        const [history, setHistory] = useState([
                    { squares: Array(9).fill(null), location: null, moveNumber: -1, moveDescription: "Go to game start"  }
                ]);
        const [xIsNext, setXIsNext] = useState(true);
        const [stepNumber, setStepNumber] = useState(0);

        let status;
        const current = history[stepNumber];
        const squares = current.squares;
        const winner = calculateWinner(squares);
    
        status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;    

    return (
        <div className="game">
          <div className="game-board">
            <Board
                squares={squares}
                handleClick={(i) => doThisOnHandleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <Moves history={history} setStepNumber={setStepNumber} setXIsNext={setXIsNext} setHistory={setHistory} />
          </div>
        </div>
      );
    
    function doThisOnHandleClick(i) {
        if (calculateWinner(squares) || squares[i])
            return;

        const nextSquares = squares.slice();
        const location = calculateLocation(i);
        const desc = getDescription({ nextSquares, location }, stepNumber + 1);

        nextSquares[i] = xIsNext ? 'X' : 'O';

        setStepNumber(history.length);
        setHistory(history.concat([ { squares: nextSquares, location: location, moveNumber: stepNumber, moveDescription: desc } ]));
        setXIsNext(!xIsNext);
    }
      
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }

    function calculateLocation(index) {
        const locations = [
            {
                index: 0,
                location: "(1, 1)"
            },
            {
                index: 1,
                location: "(2, 1)"
            },
            {
                index: 2,
                location: "(3, 1)"
            },
            {
                index: 3,
                location: "(1, 2)"
            },
            {
                index: 4,
                location: "(2, 2)"
            },
            {
                index: 5,
                location: "(2, 3)"
            },
            {
                index: 6,
                location: "(3, 1)"
            },
            {
                index: 7,
                location: "(3, 2)"
            },
            {
                index: 8,
                location: "(3, 3)"
            },
        ];

        return locations.filter(location => location.index === index)[0].location;
    }

    function getDescription(step, move) {
        return move ? `Go to move #${move}, location: ${step.location}` : 'Go to game start';
    }
}

export default Game;