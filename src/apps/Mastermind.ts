import { Board } from "../models/Board";
import { IO } from "../utils/IO";
import { BoardView } from "../views/BoardView";

export class Mastermind {
  private readonly board: Board;

  constructor() {
    this.board = new Board();
  }

  public async play(): Promise<void> {
    const boardView = new BoardView(this.board);
    boardView.start();
    while (!this.board.isSolved() || this.board.isGameOver()) {
      boardView.print();
      const colors = await boardView.readProposedCombination();
      this.board.proposeCombination(colors);
    }
    await this.finish(boardView);
  }

  private async finish(boardView: BoardView): Promise<void> {
    boardView.print();
    boardView.finish();
    const wantToPlayAgain = await boardView.wantToPlayAgain();
    if (wantToPlayAgain) {
      this.board.reset();
      await this.play();
    }
  }
}