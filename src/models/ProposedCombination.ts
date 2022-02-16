import * as  assert from "assert";
import { Color } from "./Color";
import { Combination } from "./Combination";

export class ProposedCombination extends Combination {
  constructor(colors: Color[]) {
    assert(colors.length === Combination.TOTAL_NUM_OF_PEGS, "ProposedCombination must have 4 colors");
    super();
    this.colors = colors;
  }

  public getColors(): Color[] {
    return this.colors;
  }
}