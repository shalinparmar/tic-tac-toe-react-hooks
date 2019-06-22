import React, {useState} from 'react';
import '../App.css';

function Moves({history, setStepNumber, setXIsNext, setHistory}) {

    const [selected, setSelected] = useState(null);
    const [isDescending, setIsDescending] = useState(false);
   
    return (
        <div>
            <label className="switch">
                <input type="checkbox" checked={isDescending} onChange={() => toggleHistorySorting()}  />
                <span className="slider round"></span>
            </label>
            <label>{`Moves sorted in ${!isDescending ? "Ascending" : "Descending"} order`}</label>
            <ol>
            {
                history.map((step, move) => {
                    return (
                        <li key={move}>
                            <button onClick={() => jumpTo(move)} className={move === selected ? "moveSelected" : "move"}>{step.moveDescription}</button>
                        </li>
                    );
                })
            }
            </ol>
        </div>
    );

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
        setSelected(step);
    }
    
    function toggleHistorySorting() {
        setIsDescending(!isDescending);
        setHistorySorting();
    }

    function setHistorySorting() {
        let newHistory = history.slice();
        if (isDescending) {
            setHistory(newHistory.sort((a, b) => a.moveNumber > b.moveNumber));
        } else {
            setHistory(newHistory.reverse());
        }
    }
}

export default Moves;