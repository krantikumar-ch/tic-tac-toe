import Cell from "../models/Cell";

export default function initializeCells(size:number):Cell[][]{
    const cells = [] as Cell[][];
    for(let i=0; i<size; i++){
        const cellRow = [] as Cell[];
        for(let j=0; j<size; j++){
            cellRow.push(new Cell(i, j));
        }
        cells.push(cellRow);
    }
    return cells;
}