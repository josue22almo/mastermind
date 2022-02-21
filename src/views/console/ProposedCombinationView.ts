import { Color } from "../../models/Color";
import { Combination } from "../../models/Combination";
import { IOView } from "./IOView";

export class ProposedCombinationView extends IOView {
  public async read(): Promise<Color[]> {
    let proposedColors: Color[] = [];
    do {
      const combination = await this.io.readString('Propose a combination: ');
      proposedColors = combination.split('').map(color => color as Color);
    } while (!this.isValid(proposedColors));

    return proposedColors;
  }

  private isValid(proposedColors: Color[]) {
    if (proposedColors.length !== Combination.TOTAL_NUM_OF_PEGS) {
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
