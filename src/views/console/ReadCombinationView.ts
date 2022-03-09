import { Color } from "../../models/Color";
import { Combination } from "../../models/Combination";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class ReadCombinationView extends WithConsoleView {
  public async read(): Promise<Color[]> {
    let proposedColors: Color[] = [];
    do {
      const combination = await this.io.read('Propose a combination: ');
      proposedColors = combination.split('').map(color => color as Color);
    } while (!this.isValid(proposedColors));

    return proposedColors;
  }

  private isValid(proposedColors: Color[]) {
    if (proposedColors.length !== Combination.TOTAL_NUM_OF_PEGS) {
      Message.WRONG_COMBINATION_LENGTH.writeln();
      return false;
    }
    if (proposedColors.some(color => !Object.values(Color).includes(color))) {
      Message.WRONG_COMBINATION_COLORS.writeln();
      return false;
    }
    return true;
  }
}
