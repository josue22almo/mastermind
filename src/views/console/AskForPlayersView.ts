import { AskForCodeBrakerView } from "./AskForCodeBrakerView";
import { AskForCodeMakerView } from "./AskForCodeMakerView";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class AskForPlayersView extends WithGameConsoleView {
  public async interact(): Promise<void> {
    await new AskForCodeMakerView(this.game).interact()
    await new AskForCodeBrakerView(this.game).interact()
  }
}
