import React, { useState } from "react";
import Cell from "./Cell";
import Header from "./Header";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("O");
  const [counter, setCount] = useState(0);
  console.log(cells);

  var tmp = "";

  function checker() {
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    for (let curr of winCondition) {
      const [a, b, c] = curr;
      if (cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c]) {
        tmp = cells[a];
        return true;
      }
    }
    return false;
  }

  var gameOver = checker();
  if (gameOver) {
    console.log(tmp);
  }

  if (counter === 9 && !gameOver) {
    tmp = "No One";
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="board">
          {cells.map((val, index) => (
            <Cell
              key={index}
              id={index}
              cell={val}
              go={turn}
              setGo={setTurn}
              updater={setCells}
              curr={cells}
              turns={counter}
              tie={setCount}
              win={gameOver}
            />
          ))}
        </div>
      </div>
      <h1 className="header"> {tmp ? tmp + " is winner" : null}</h1>
    </div>
  );
}

export default App;
