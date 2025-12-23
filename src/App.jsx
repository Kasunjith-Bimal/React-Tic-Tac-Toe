import Square from "./components/Square/Square"
import { useState,useEffect } from "react"
import { Circle, Cross, Empty } from "./data"
import Player from "./components/Player/Player"
import Result from "./components/Result/Result"
function App() {
  const [player,setPlayer] = useState(Circle);
  const [winner,setWinner] = useState(null);
  const [positions,setPositions] = useState([
    Empty,Empty,Empty,
    Empty,Empty,Empty,
    Empty,Empty,Empty,    
  ]);

  function checkPositions(pos1,pos2,pos3,player){

     if(positions[pos1] === player && positions[pos2] === player && positions[pos3] === player){
      return true;
     }
     return false;
  }

 const resetGame = () => {
    setPositions([
    Empty,Empty,Empty,
    Empty,Empty,Empty,
    Empty,Empty,Empty,    
    ]);
    setPlayer(Circle);
    setWinner(null);
 }

 const decision =() =>{
  //colums
   if(checkPositions(0,1,2,Circle) || checkPositions(3,4,5,Circle) || checkPositions(6,7,8,Circle)){
    return Circle;
   }
   //rows
   if(checkPositions(0,3,6,Circle) || checkPositions(1,4,7,Circle) || checkPositions(2,5,8,Circle)){
    return Circle ;
   }
   //diagonals
   if(checkPositions(0,4,8,Circle) || checkPositions(2,4,6,Circle)){
    return Circle;
   }

   if(checkPositions(0,1,2,Cross) || checkPositions(3,4,5,Cross) || checkPositions(6,7,8,Cross)){
    return Cross;
   }
   //rows
   if(checkPositions(0,3,6,Cross) || checkPositions(1,4,7,Cross) || checkPositions(2,5,8,Cross)){
    return Cross ;
   }
   //diagonals
   if(checkPositions(0,4,8,Cross) || checkPositions(2,4,6,Cross)){
    return Cross;
   }

   if(positions.every(position => position !== Empty)){
    return Empty;
   }

   return null; 
 }

 useEffect(() => {
  setWinner(decision());
 })

  const handleMove = (position) => {
    // alert(`Move at position: ${position}`);
    let updatePositions = [...positions];
    updatePositions[position] = player;
    setPositions(updatePositions);
    setPlayer(player === Cross ? Circle : Cross);
  }

  return (
    <div className="App">
    <h1 className="app_header">Tic Tac Toe</h1>
     <ul>
      <Player initialName="Player 1" symbol="Circle"/>
      <Player initialName="Player 2" symbol="Cross"/>   
    </ul>
    <div className="game_section">
   
       {positions.map((position,index) => (
        <Square key={index *455} position={index} value={position} handleMove = {handleMove} />
       ))}
    </div>
    <div style={{padding: "20px"}}>
       {winner && <Result winner={winner} resetGame ={resetGame}/>}
    </div>
    </div>
  )
}

export default App
