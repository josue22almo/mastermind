import { WithBoardConsoleView } from "./WithBoardConsoleView";

export class SecretCombinationView extends WithBoardConsoleView {
  public render() {
    this.io.writeString('\n');
    this.io.writeString(`${this.board.numOfAttempts()} attempt(s):`);
    this.io.writeString(`****`);
  }
}
