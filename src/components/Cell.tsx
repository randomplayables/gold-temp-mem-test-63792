import React from 'react';
import { CellValue } from '../types';
import './Cell.css';

interface CellProps {
  value: CellValue;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div className="cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
