import Cell from "../models/Cell";
import Square from "./Square";

interface Props {
  cells: Cell[][];
  onSquare: (cell: Cell) => void;
}

const Board = ({ cells, onSquare }: Props) => {
  const cellsList = cells.map((cellRow: Cell[], rowIndex: number) => (
    <div className="row" key={rowIndex}>
      {cellRow.map((cell: Cell, colIdx) => (
        <Square key={`${rowIndex}-${colIdx}`} cell={cell} onSquare={onSquare} />
      ))}
    </div>
  ));

  return <div className="game-board">{cellsList}</div>;
};

export default Board;
