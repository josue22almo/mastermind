import { Board } from "../../models/Board";
import { IOView } from "./IOView";

export class WithBoardConsoleView extends IOView {
  protected readonly board: Board;

  constructor(board: Board) {
    super();
    this.board = board;
  }
}