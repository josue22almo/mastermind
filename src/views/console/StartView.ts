import { Message } from "../../utils/Message";
import { AskForPlayersView } from "./AskForPlayersView";
import { SetSecretCombinationView } from "./SetSecretCombinationView";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class StartView extends WithGameConsoleView {
  public async interact(): Promise<void> {
    Message.TITLE.writeln();
    await new AskForPlayersView(this.game).interact();
    await new SetSecretCombinationView(this.game).interact();
  }
}