import { Board } from "../../models/Board";
import { ConsoleView } from "./ConsoleView";

export class WithBoardConsoleView extends ConsoleView {
  protected readonly board: Board;

  constructor(board: Board) {
    super();
    this.board = board;
  }
}