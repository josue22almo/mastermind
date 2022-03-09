import { InGameController } from "../../controllers/InGameController";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class SecretCombinationView extends WithConsoleView {
  public interact(controller: InGameController) {
    Message.EMPTY.writeln();
    Message.NUM_ATTEMPTS(controller.numOfAttempts()).writeln();
    Message.SECRET_COMBINATION.writeln();
  }
}
