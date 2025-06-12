import { useState, useCallback } from 'react';
import { BoardState, GameStatus } from '../types';
import { initializeBoard, checkWinner } from '../utils/gameLogic';

const BOARD_SIZE = 3;

export const useGame = () => {
  const [board, setBoard] = useState<BoardState>(() => initializeBoard(BOARD_SIZE));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [status, setStatus] = useState<GameStatus>('in-progress');

  const move = useCallback((row: number, col: number) => {
    if (board[row][col] || status !== 'in-progress') {
      return;
    }

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setStatus(winner);
    } else if (newBoard.flat().every(cell => cell)) {
      setStatus('draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }, [board, currentPlayer, status]);
  
  const resetGame = useCallback(() => {
    setBoard(initializeBoard(BOARD_SIZE));
    setCurrentPlayer('X');
    setStatus('in-progress');
  }, []);

  return { board, status, move, resetGame };
};
