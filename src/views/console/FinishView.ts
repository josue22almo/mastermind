import { InGameController } from "../../controllers/InGameController";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class FinishView extends WithConsoleView {
  public interact(controller: InGameController) {
    if (controller.isSolved()) {
      Message.CODE_BRAKER_WINS.writeln();
    } else if (controller.isGameOver()) {
      Message.CODE_BRAKER_LOSES.writeln();
    }
    controller.next();
  }
}