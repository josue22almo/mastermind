import { Board } from "../../models/Board";

export class WithBoardView {
  protected readonly board: Board;

  constructor(board: Board) {
    this.board = board;
  }
}