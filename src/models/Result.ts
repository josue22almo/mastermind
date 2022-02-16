import { Color } from "./Color";

export class Result {
  getColors(): Color[] {
    return this.colors;
  }
  private readonly colors: Color[];
  private readonly blacks: number;
  private readonly whites: number;

  constructor(
    colors: Color[],
    blacks: number,
    whites: number
  ) {
    this.colors = colors;
    this.blacks = blacks;
    this.whites = whites;
  }

  public succeeded(): boolean {
    return this.blacks === 4;
  }

  public getBlackPegs() {
    return this.blacks;
  }
  public getWhitePegs() {
    return this.whites;
  }
}
