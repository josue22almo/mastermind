import { StartController } from "../../controllers/StartController";
import { AskForCodeBrakerView } from "./AskForCodeBrakerView";
import { AskForCodeMakerView } from "./AskForCodeMakerView";
import { WithConsoleView } from "./WithConsoleView";

export class AskForPlayersView extends WithConsoleView {
  public async interact(controller: StartController): Promise<void> {
    await new AskForCodeMakerView().interact(controller);
    await new AskForCodeBrakerView().interact(controller);
  }
}
