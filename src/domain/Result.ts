import { Color } from "./Color";
import { ProposedCombination } from "./ProposedCombination";
import { IO } from "./utils/IO";

export class Result {
  private readonly colors: Color[];
  private readonly blacks: number;
  private readonly whites: number;

  constructor(
    proposedCombination: ProposedCombination,
    blacks: number,
    whites: number
  ) {
    this.colors = proposedCombination.getColors();
    this.blacks = blacks;
    this.whites = whites;
  }

  public succeeded(): boolean {
    return this.blacks === 4;
  }

  public print() {
    const io = new IO();
    io.writeString(`${this.colors.join('')} --> ${this.blacks} blacks and ${this.whites} whites`)
  }
}
