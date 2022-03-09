import { StartController } from "../../controllers/StartController";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class AskForCodeBrakerView extends WithConsoleView {
  public async interact(controller: StartController): Promise<void> {
    const type = await this.io.readIntInRange(Message.CODE_BRAKER_TYPE.toString(), 1, 2);
    controller.setCodeBraker(type);
  }
}
