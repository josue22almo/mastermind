import { WithBoardConsoleView } from "./WithBoardConsoleView";

export class FinishView extends WithBoardConsoleView {
  public render() {
    if (this.board.isSolved()) {
      this.io.writeString("You've won!!! ;-)");
    } else if (this.board.isGameOver()) {
      this.io.writeString("You've lost :-( Try again!");
    }
  }
}