import Cell from "../models/Cell";
import Player from "../models/Player";

export default interface WinningStrategy{
    checkWinner(cells:Cell[][], currentCell: Cell, player:Player):boolean
}