import { useState } from "react";
import Player from "../models/Player";
import initializeCells from "../helpers/CellHelper";
import Cell from "../models/Cell";
import Board from "./Board";
import getAllWinningStrageties from "../helpers/WinnerStrategyHelper";

interface Props {
  players: Player[];
  size: number;
}
const Game = ({ players, size }: Props) => {
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [cells, setCells] = useState<Cell[][]>(initializeCells(size));
  const [error, setError] = useState(false);
  const [winnerIdx, setWinnerIdx] = useState(-1);
  const winningStrategies = getAllWinningStrageties();

  const handleReset = () => {
    setCurrentPlayerIdx(0);
    setCells(initializeCells(size));
    setError(false);
    setWinnerIdx(-1);
  };
  const validMove = (cell: Cell): boolean => {
    setError(false);
    if (cell.symbol === null) return true;
    setError(true);
    return false;
  };

  const checkWinner = (currentCell: Cell, cells: Cell[][]): boolean => {
    const currentPlayer = players[currentPlayerIdx];
    for (let i = 0; i < winningStrategies.length; i++) {
      const winningStrategy = winningStrategies[i];
      if (winningStrategy.checkWinner(cells, currentCell, currentPlayer)) {
        setWinnerIdx(currentPlayerIdx);
        return true;
      }
    }
    return false;
  };

  const gameOver = (): boolean => winnerIdx != -1;

  const handleClick = (cell: Cell) => {
    if (!validMove(cell) || gameOver()) return;
    const newCells = [...cells];
    const { rowIndex, colIndex } = cell;
    newCells[rowIndex][colIndex].symbol = players[currentPlayerIdx].symbol;
    setCells(newCells);
    if (checkWinner(cell, newCells)) {
      return;
    }
    setCurrentPlayerIdx((currentPlayerIdx + 1) % players.length);
  };

  return (
    <div className="game">
      {error && (
        <div className="game-message game-error-message">Invalid Move</div>
      )}
      {winnerIdx != -1 && (
        <div className="game-message game-success-message">
          Congratulations to {players[winnerIdx].name}. You Won The Game
        </div>
      )}

      <Board cells={cells} onSquare={(cell: Cell) => handleClick(cell)}></Board>
      <div className="button">
        <button className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;
