import { useState } from 'react'

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = 'X';
    setSquare(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClicke={handleClick} />
        <Square value={squares[1]} onSquareClicke={handleClick} />
        <Square value={squares[2]} onSquareClicke={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClicke={handleClick} />
        <Square value={squares[4]} onSquareClicke={handleClick} />
        <Square value={squares[5]} onSquareClicke={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClicke={handleClick} />
        <Square value={squares[7]} onSquareClicke={handleClick} />
        <Square value={squares[8]} onSquareClicke={handleClick} />
      </div>
    </>
  );
}
