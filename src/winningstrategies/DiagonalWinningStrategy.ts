import Cell from "../models/Cell";
import Player from "../models/Player";
import WinningStrategy from "./WinningStrategy";

export default class DiagonalWinningStrategy implements WinningStrategy {
    
    checkWinner(cells: Cell[][], currentCell:Cell, player: Player): boolean {   
      return this.validateLeftDiagonoal(cells, currentCell, player)
            || this.validaterightDiagonoal(cells, currentCell, player);

    }

    private validateLeftDiagonoal(cells: Cell[][], currentCell:Cell, player: Player):boolean{
        const total = this.vaidateLeftUp(cells, currentCell, player)+this.validateRightDown(cells, currentCell, player);
        return total > cells.length;

    }

    private validaterightDiagonoal(cells: Cell[][], currentCell:Cell, player: Player):boolean{
        const total = this.validateRightUp(cells, currentCell, player)+this.validateLeftDown(cells, currentCell, player);
        return total > cells.length;

    }

    private vaidateLeftUp(cells: Cell[][], currentCell:Cell, player: Player):number{
        return this.validateCell(cells, currentCell, player, -1, -1, (i:number, j:number, n:number) => (i >= 0 && j>=0));
    }

    private validateRightDown(cells: Cell[][], currentCell:Cell, player: Player):number{
        return this.validateCell(cells, currentCell, player, 1, 1, (i:number, j:number, n:number) => (i <n && j<n));
    }

    private validateRightUp(cells: Cell[][], currentCell:Cell, player: Player):number{
        return this.validateCell(cells, currentCell, player, -1, 1, (i:number, j:number, n:number) => (i >= 0 && j<n));
    }

    private validateLeftDown(cells: Cell[][], currentCell:Cell, player: Player):number{
        return this.validateCell(cells, currentCell, player, 1, -1, (i:number, j:number, n:number) => (i<n && j >= 0));
    }

    private validateCell(cells:Cell[][], currentCell:Cell, player: Player,
        rowIncrement:number, colIncrement:number,
        valid:(i:number, j:number, n:number)=>boolean) : number{

        const n = cells.length;
        let i = currentCell.rowIndex;
        let j = currentCell.colIndex;
        let count = 0;

        while(valid(i, j, n)){
            if(cells[i][j].symbol === null || cells[i][j].symbol !== player.symbol){
                return -1;
            }
            i = i+rowIncrement;
            j = j+colIncrement;
            ++count;
        }
        return count;
    }

}