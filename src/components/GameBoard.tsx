import React from 'react';
import { BoardState } from '../types';
import Cell from './Cell';
import './GameBoard.css';

interface GameBoardProps {
  board: BoardState;
  onMove: (row: number, col: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, onMove }) => {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} value={cell} onClick={() => onMove(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;