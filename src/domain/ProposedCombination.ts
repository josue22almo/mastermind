import { Color } from "./Color";
import { Combination } from "./Combination";
import { IO } from "./utils/IO";

export class ProposedCombination extends Combination {
  public getColors(): Color[] {
    return this.colors;
  }

  public async read(): Promise<void> {
    const io = new IO();
    let proposedColors: Color[] = [];
    do {
      const combination = await io.readString('Propose a combination: ');
      proposedColors = combination.split('').map(color => color as Color);
    } while (!this.isValid(proposedColors));

    this.colors = proposedColors;
  }

  private isValid(proposedColors: Color[]) {
    const io = new IO();
    if (proposedColors.length !== 4) {
      io.writeString('Wrong proposed combination length');
      return false;
    }
    if (proposedColors.some(color => !Object.values(Color).includes(color))) {
      io.writeString(`Wrong colors, they must be: ${Object.values(Color).join('')}`);
      return false;
    }
    return true;
  }
}
