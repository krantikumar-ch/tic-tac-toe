import ColumnWinningStrategy from "../winningstrategies/ColumnWinningStrategy";
import DiagonalWinningStrategy from "../winningstrategies/DiagonalWinningStrategy";
import RowWinningStrategy from "../winningstrategies/RowWinningStrategy";
import WinningStrategy from "../winningstrategies/WinningStrategy";

export default function getAllWinningStrageties():WinningStrategy[]{
    const winningstrategies = [] as WinningStrategy[];
    winningstrategies.push(new RowWinningStrategy());
    winningstrategies.push(new DiagonalWinningStrategy());
    winningstrategies.push(new ColumnWinningStrategy());
    return winningstrategies;

}
