import { Color } from "./Color";
import { Combination } from "./Combination";

export class Result {
  private readonly secretCombination: Color[];
  private readonly proposedCombination: Color[];

  constructor(
    secretCombination: Color[],
    proposedCombination: Color[],
  ) {
    this.secretCombination = secretCombination;
    this.proposedCombination = proposedCombination;
  }

  public succeeded(): boolean {
    return this.blacks === Combination.TOTAL_NUM_OF_PEGS;
  }

  public toString(): string {
    return `${this.proposedCombination.join('')} --> ${this.blacks} blacks and ${this.whites} whites`;
  }

  private get blacks(): number {
    let result = 0;
    for (let i = 0; i < Combination.TOTAL_NUM_OF_PEGS; i++) {
      if (this.secretCombination[i] === this.proposedCombination[i]) {
        result++;
      }
    }
    return result;
  }

  private get whites(): number {
    const visited = [false, false, false, false];
    let result = 0;
    for (let i = 0; i < Combination.TOTAL_NUM_OF_PEGS; i++) {
      for (let j = 0; j < Combination.TOTAL_NUM_OF_PEGS; j++) {
        if (this.secretCombination[i] === this.proposedCombination[i]) {
          visited[j] = true;
        } else if (this.secretCombination[i] === this.proposedCombination[j]) {
          result++;
          visited[j] = true;
        }
      }
    }
    return result;
  }
}
