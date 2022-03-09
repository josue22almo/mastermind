import { InGameController } from "../../controllers/InGameController";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class FinishView extends WithConsoleView {
  public interact(controller: InGameController) {
    if (controller.isSolved()) {
      this.io.writeln(Message.CODE_BRAKER_WINS.toString());
    } else if (controller.isGameOver()) {
      this.io.writeln(Message.CODE_BRAKER_LOSES.toString());
    }
    controller.next();
  }
}