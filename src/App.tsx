import React from 'react';
import { useGame } from './hooks/useGame';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';
import './App.css';

export default function App(): JSX.Element {
  const { board, status, move, resetGame } = useGame();

  return (
    <div className="game-container">
      <GameStatus status={status} onReset={resetGame} />
      <GameBoard board={board} onMove={move} />
    </div>
  )
}