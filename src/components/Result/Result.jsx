import Circle from '../Circle/Circle.jsx';
import Cross from '../Cross/Cross.jsx';
import './Result.css';

function Result({winner,resetGame}){
    if(winner !== "Empty"){
        return (
            <div className="result-container">
                <p> Win </p>
                {winner === "Circle" ? <Circle/> : <Cross/>}
                <button onClick={() =>resetGame()}>Reset Game</button>
            </div>
        );
    }else{
        return (
            <div className="result-container">
                <p> Game is Draw </p>
                <button onClick={() =>resetGame()}>Reset Game</button>
            </div>
        );
    }


}

export default Result;