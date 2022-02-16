import { Board } from "./Board";
import { IO } from "./utils/IO";

export class Mastermind {
  private readonly board: Board;

  constructor() {
    this.board = new Board();
  }

  public async play(): Promise<void> {
    new IO().writeString('Welcome to Mastermind!');
    while (!this.board.isSolved() || this.board.isGameOver()) {
      this.board.print();
      await this.board.proposeCombination();
    }
    this.board.print();
    this.board.finish();
    await this.promptToPlayAgain();
  }

  private async promptToPlayAgain() {
    const io = new IO();
    io.writeString('\n');
    const answer = await  io.readString('Do you want to play again? (y/n)');
    if (answer === 'y') {
      this.board.reset();
      await this.play();
    }
  }
}