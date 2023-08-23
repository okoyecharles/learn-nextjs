"use client"
import { useState, useEffect } from "react"

export default function Home() {
  return (
    <Board />
  )
}

function Board() {
  const [moves, setMoves] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState(null);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const winner = calculateWinner()
    if (winner) {
      setWon(true)
      setStatus(`Winner is ${winner}`);
    } else {
      setStatus(`Next Move: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [xIsNext]);

  const handleClick = (i) => {
    if (moves[i] || won) return;
  
    const newMoves = moves?.slice();
    newMoves[i] = xIsNext ? "X" : "O"
    setXIsNext(prev => !prev)
    setMoves(newMoves)
  }

  const calculateWinner = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const win of wins) {
      const [a, b, c] = win;
      if (moves[a] !== null & moves[a] === moves[b] & moves[a] === moves[c]) {
        return moves[a];
      }
    }

    return null
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={moves[0]}/>
        <Square onClick={() => handleClick(1)} value={moves[1]}/>
        <Square onClick={() => handleClick(2)} value={moves[2]}/>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={moves[3]}/>
        <Square onClick={() => handleClick(4)} value={moves[4]}/>
        <Square onClick={() => handleClick(5)} value={moves[5]}/>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={moves[6]}/>
        <Square onClick={() => handleClick(7)} value={moves[7]}/>
        <Square onClick={() => handleClick(8)} value={moves[8]}/>
      </div>
    </>
  )
}

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} styles={{ height: '5px', width: '5px' }}>
      {value || ' '}
    </button>
  )
}
