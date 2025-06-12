import React from 'react';
import { GameStatus as StatusType } from '../types';
import './GameStatus.css';

interface GameStatusProps {
  status: StatusType;
  onReset: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ status, onReset }) => {
  let message = '';
  switch (status) {
    case 'in-progress':
      message = "Game in progress...";
      break;
    case 'X':
      message = "Player X wins!";
      break;
    case 'O':
      message = "Player O wins!";
      break;
    case 'draw':
      message = "It's a draw!";
      break;
  }

  return (
    <div className="game-status">
      <p>{message}</p>
      {status !== 'in-progress' && (
        <button onClick={onReset}>Play Again</button>
      )}
    </div>
  );
};

export default GameStatus;
