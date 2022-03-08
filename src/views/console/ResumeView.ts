import { WithGameConsoleView } from "./WithGameConsoleView";
import { YesNoDialog } from "../../utils/YesNoDialog";

export class ResumeView extends WithGameConsoleView {
  public async interact(): Promise<boolean> {
    const mustResume = await new YesNoDialog().read('Do you want to resume the game?');
    if (mustResume) {
      this.game.reset();
    }
    return mustResume;
  }
}
