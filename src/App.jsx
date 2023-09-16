import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Squares from "./Squares";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";

function App(){

  const border = ["border-right border-bottom", "border-bottom", "border-right"];

  const[cells, setCell] = useState(["","","","","","","","",""])
  const[turn, setTurn] = useState("O");
  const[winState, setState] = useState(GameState.inProgress);
  const[counter,setCount] = useState(0);
  
  

  function checkWinner(){
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
        if(cells[a] === "O"){
          setState(GameState.O);
        }
        else if(cells[a] === "X"){
          setState(GameState.X);
        }         
      }
    
    }
    
    setCount(counter+1);

  }


  useEffect(() => {
    checkWinner();
  },[cells])

  if(winState === 0 && counter >9){
    setState(GameState.draw);
  }

  return (<div>
    <div className="container">
      <div className="header">
      <h1>Tic-Tac Toe</h1>
      <GameOver winState={winState}/>
      </div>
    

      <div className="board">
        <Squares id = {0} value = {cells[0]} additionalClass={border[0]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {1} value = {cells[1]} additionalClass={border[0]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {2} value = {cells[2]} additionalClass={border[1]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {3} value = {cells[3]} additionalClass={border[0]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {4} value = {cells[4]} additionalClass={border[0]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {5} value = {cells[5]} additionalClass={border[1]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {6} value = {cells[6]} additionalClass={border[2]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {7} value = {cells[7]} additionalClass={border[2]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
        <Squares id = {8} value = {cells[8]} setTurn={setTurn} turn={turn} cells ={cells} setCell={setCell} winState={winState}/>
      </div>
      <Reset winState={winState} setTurn={setTurn} setCell={setCell} setState={setState} setCount={setCount}/>
      
    </div>

  </div>)
}

export default App;
