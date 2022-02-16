import { Color } from "../../models/Color";
import { ConsoleView } from "./ConsoleView";

export class ProposedCombinationView extends ConsoleView {
  public async read(): Promise<Color[]> {
    let proposedColors: Color[] = [];
    do {
      const combination = await this.io.readString('Propose a combination: ');
      proposedColors = combination.split('').map(color => color as Color);
    } while (!this.isValid(proposedColors));

    return proposedColors;
  }

  private isValid(proposedColors: Color[]) {
    if (proposedColors.length !== 4) {
      this.io.writeString('Wrong proposed combination length');
      return false;
    }
    if (proposedColors.some(color => !Object.values(Color).includes(color))) {
      this.io.writeString(`Wrong colors, they must be: ${Object.values(Color).join('')}`);
      return false;
    }
    return true;
  }
}
