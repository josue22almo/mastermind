import { StartController } from "../../controllers/StartController";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class AskForCodeMakerView extends WithConsoleView {
  public async interact(controller: StartController): Promise<void> {
    const type = await this.io.readIntInRange(Message.CODE_MAKER_TYPE.toString(), 1, 2);
    controller.setCodeMaker(type);
  }
}
