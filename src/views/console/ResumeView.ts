import { WithBoardConsoleView } from "./WithBoardConsoleView";
import { YesNoDialog } from "../../utils/YesNoDialog";

export class ResumeView extends WithBoardConsoleView {
  public async render(): Promise<boolean> {
    const mustResume = await new YesNoDialog().read('Do you want to resume the game?');
    if (mustResume) {
      this.board.reset();
    }
    return mustResume;
  }
}
