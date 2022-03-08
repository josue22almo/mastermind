import { Message } from "../../utils/Message";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class AskForCodeBrakerView extends WithGameConsoleView {
  public async interact(): Promise<void> {
    const type = await this.io.readIntInRange(Message.CODE_BRAKER_TYPE.toString(), 1, 2);
    this.game.setCodeBraker(type);
  }
}
