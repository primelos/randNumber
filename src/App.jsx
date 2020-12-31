import React, { useState } from 'react'
import './App.css';



function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const handleRandom = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  }

  const handleMin = (e) => {
    setMinVal(prevVal => prevVal = parseInt(e.target.value))
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random NUmber <span>{randomNum}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={handleMin}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={e => setMaxVal(+e.target.value)}/>
          </div>
        </div>
        <button onClick={handleRandom}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
