import GameState from "./GameState";
function Squares({additionalClass, value, turn, setTurn, cells, setCell, id,winState}){
    
    function clickHandler(){

        if(winState !== GameState.inProgress){
            return;
        }

        var newCell = [...cells]
        
        if(cells[id] !== ""){
            return;
        }

        newCell[id] = turn;
        if(turn === "O"){
            setTurn("X");
        }
        else if(turn === "X"){
            setTurn("O");
        }

        
        setCell(newCell);
    }

    return (<div className= {`square ${additionalClass} ${!value ? (turn + "-hover") : null}` } onClick={clickHandler}>{value}</div>)
}

export default Squares;
