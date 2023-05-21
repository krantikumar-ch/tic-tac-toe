import Cell from "../models/Cell";
import Player from "../models/Player";
import WinningStrategy from "./WinningStrategy";

export default class ColumnWinningStrategy implements WinningStrategy {
    
    checkWinner(cells: Cell[][], currentCell:Cell, player: Player): boolean {   
        const { colIndex} = currentCell;
        for(let i=0; i<cells.length; i++){
            if(cells[i][colIndex].symbol === null || cells[i][colIndex].symbol !== player.symbol){
                return false;
            }
        }
        return true;
    }

}