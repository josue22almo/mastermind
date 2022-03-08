import * as  assert from "assert";
import { Color } from "./Color";

export class Combination {
  public static readonly TOTAL_NUM_OF_PEGS = 4;

  protected colors: Color[];

  public static getRandomCombination(): Combination {
    // return new Combination([
    //   Color.BLUE,
    //   Color.YELLOW,
    //   Color.CYAN,
    //   Color.RED,
    // ]);
    return new Combination(
      [
        Color.RED,
        Color.GREEN,
        Color.YELLOW,
        Color.BLUE,
        Color.MAGENTA,
        Color.CYAN,
      ].sort(() => Math.random() - 0.5).slice(0, 4)
    )
  }

  constructor(colors: Color[]) {
    assert(colors.length === Combination.TOTAL_NUM_OF_PEGS, "ProposedCombination must have 4 colors");
    this.colors = colors;
  }

  public getColors(): Color[] {
    return this.colors;
  }
}
