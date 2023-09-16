import GameState from "./GameState";

function GameOver({winState}){

    switch(winState){
        case GameState.O:
            return <div className="game-over">O Wins</div>;
        case GameState.X:
            return <div className="game-over">X Wins</div>;
        case GameState.draw:
            return <div className="game-over">Draw</div>;
        case GameState.inProgress:
                return <></>;
        default:
            return <></>;
    }
}

export default GameOver;
