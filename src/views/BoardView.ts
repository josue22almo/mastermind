import { Board } from "../models/Board";
import { Color } from "../models/Color";
import { IO } from "../utils/IO";
import { ResultView } from "./ResultView";

export class BoardView {
  private readonly board: Board;
  private readonly io: IO;

  constructor(board: Board) {
    this.board = board;
    this.io = new IO();
  }

  public start(): void {
    this.io.writeString('Welcome to Mastermind!');
  }

  public  print() {
    this.writeSecretCombination();
    for(const result of this.board.getResults()) {
      new ResultView(result).print();
    }
  }

  public async wantToPlayAgain(): Promise<boolean> {
    const io = new IO();
    io.writeString('\n');
    const answer = await  io.readString('Do you want to play again? (y/n)');
    return answer === 'y'
  }

  public async readProposedCombination(): Promise<Color[]> {
    const io = new IO();
    let proposedColors: Color[] = [];
    do {
      const combination = await io.readString('Propose a combination: ');
      proposedColors = combination.split('').map(color => color as Color);
    } while (!this.isValid(proposedColors));

    return proposedColors;
  }

  private isValid(proposedColors: Color[]) {
    const io = new IO();
    if (proposedColors.length !== 4) {
      io.writeString('Wrong proposed combination length');
      return false;
    }
    if (proposedColors.some(color => !Object.values(Color).includes(color))) {
      io.writeString(`Wrong colors, they must be: ${Object.values(Color).join('')}`);
      return false;
    }
    return true;
  }

  public finish() {
    if (this.board.isSolved()) {
      this.io.writeString("You've won!!! ;-)");
    } else if (this.board.isGameOver()) {
      this.io.writeString("You've lost :-( Try again!");
    }
  }

  private writeSecretCombination() {
    this.io.writeString('\n');
    this.io.writeString(`${this.board.numOfAttempts()} attempt(s):`);
    this.io.writeString(`****`);
  }
}