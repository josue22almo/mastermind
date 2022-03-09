import { InGameController } from "../../controllers/InGameController";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class SecretCombinationView extends WithConsoleView {
  public interact(controller: InGameController) {
    this.io.writeln(Message.EMPTY.toString());
    this.io.writeln(Message.NUM_ATTEMPTS(controller.numOfAttempts()).toString());
    this.io.writeln(Message.SECRET_COMBINATION.toString());
  }
}
