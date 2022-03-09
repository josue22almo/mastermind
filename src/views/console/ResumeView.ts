import { WithConsoleView } from "./WithConsoleView";
import { YesNoDialog } from "../../utils/YesNoDialog";
import { ResumeController } from "../../controllers/ResumeController";

export class ResumeView extends WithConsoleView {
  public async interact(controller: ResumeController): Promise<void> {
    const mustResume = await new YesNoDialog().read('Do you want to resume the game?');
    if (mustResume) {
      controller.reset();
    } else {
      controller.next();
    }
  }
}
