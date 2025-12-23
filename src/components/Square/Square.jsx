import SquareCSS from './Square.css';
import Circle from '../../components/Circle/Circle.jsx';
import Cross from '../../components/Cross/Cross.jsx';

function Square({position, value,handleMove}) {
    function hadleClick(){
        if(value === "Empty") {
         handleMove(position);
        }
    }
  return (<div className="square" onClick={hadleClick}>
   {value === "Circle" && <Circle />}
   {value === "Cross" && <Cross />}
  </div>);
}

export default Square;