import { Message } from "../../utils/Message";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class AskForCodeMakerView extends WithGameConsoleView {
  public async interact(): Promise<void> {
    const type = await this.io.readIntInRange(Message.CODE_MAKER_TYPE.toString(), 1, 2);
    this.game.setCodeMaker(type);
  }
}
