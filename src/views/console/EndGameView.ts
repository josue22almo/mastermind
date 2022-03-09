import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class EndGameView extends WithConsoleView {
  public interact() {
    this.io.writeln(Message.END_GAME.toString());
  }
}