import { BoardState } from '../types';

export const initializeBoard = (size: number): BoardState => {
  return Array(size).fill(null).map(() => Array(size).fill(null));
};

export const checkWinner = (board: BoardState): 'X' | 'O' | null => {
  const lines = [
    // Rows
    ...board,
    // Columns
    ...board.map((_, colIndex) => board.map(row => row[colIndex])),
    // Diagonals
    [board.map((row, index) => row[index])],
    [board.map((row, index) => row[board.length - 1 - index])]
  ];

  for (const line of lines) {
    if (line.every(cell => cell === 'X')) return 'X';
    if (line.every(cell => cell === 'O')) return 'O';
  }

  return null;
};
