import { Message } from "../../utils/Message";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class FinishView extends WithGameConsoleView {
  public interact() {
    if (this.game.isSolved()) {
      Message.CODE_BRAKER_WINS.writeln();
    } else if (this.game.isGameOver()) {
      Message.CODE_BRAKER_LOSES.writeln();
    }
  }
}