import { Message } from "../../utils/Message";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class SecretCombinationView extends WithGameConsoleView {
  public interact() {
    Message.EMPTY.writeln();
    Message.NUM_ATTEMPTS(this.game.numOfAttempts()).writeln();
    Message.SECRET_COMBINATION.writeln();
  }
}
