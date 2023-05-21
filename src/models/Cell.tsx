export default class Cell {
  rowIndex: number;
  colIndex: number;
  symbol: string | null;

  constructor(rowIndex: number, colIndex: number) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.symbol = null;
  }
}
