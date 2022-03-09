import { StartController } from "../../controllers/StartController";
import { Message } from "../../utils/Message";
import { AskForPlayersView } from "./AskForPlayersView";
import { SetSecretCombinationView } from "./SetSecretCombinationView";
import { WithConsoleView } from "./WithConsoleView";

export class StartView extends WithConsoleView {
  public async interact(controler: StartController): Promise<void> {
    Message.TITLE.writeln();
    await new AskForPlayersView().interact(controler);
    await new SetSecretCombinationView().interact(controler);
    controler.next();
  }
}