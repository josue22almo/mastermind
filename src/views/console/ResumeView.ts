import { WithBoardConsoleView } from "./WithBoardConsoleView";

export class ResumeView extends WithBoardConsoleView {
  public async render(): Promise<boolean> {
    const answer = await this.io.readString('Do you want to resume the game? (y/n)');
    const mustResume = answer === 'y';
    if (mustResume) {
      this.board.reset();
    }
    return mustResume;
  }
}
