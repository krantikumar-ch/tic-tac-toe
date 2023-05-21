import Cell from "../models/Cell";

interface Props {
  cell: Cell;
  onSquare: (cell: Cell) => void;
}

const Square = ({ cell, onSquare }: Props) => (
  <div className="square" onClick={() => onSquare(cell)}>
    {cell.symbol && cell.symbol}
  </div>
);
export default Square;
