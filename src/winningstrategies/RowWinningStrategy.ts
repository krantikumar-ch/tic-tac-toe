import Cell from "../models/Cell";
import Player from "../models/Player";
import WinningStrategy from "./WinningStrategy";

export default class RowWinningStrategy implements WinningStrategy {
    
    checkWinner(cells: Cell[][], currentCell:Cell, player: Player): boolean {        
        const cellRow = cells[currentCell.rowIndex];
        for(let i=0; i<cellRow.length; i++){
            if(cellRow[i].symbol === null || cellRow[i].symbol !== player.symbol){
                return false;
            }
        }
        return true;
    }

}