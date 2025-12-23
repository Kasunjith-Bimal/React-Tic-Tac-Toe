import { useState } from "react";
import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";

function Player({initialName ,symbol}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing((editing)=> !editing    );
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let playerNameSpan = <span className="player-name">{playerName}</span>;

    if(isEditing){
        playerNameSpan = <input type="text" value={playerName} onChange={handleChange}/>;
    }

    return (<li>
        <span className="player">
         <span className="player-name"> {playerNameSpan} </span>
         <span className="player-symbol">{symbol === 'Circle' ? <Circle size={25}/> : <Cross size={25}/>}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}

export default Player;