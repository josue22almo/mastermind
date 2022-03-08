import { Color } from "./Color";
import { Result } from "./Result";

export class Board {
  private static readonly MAX_ATTEMPTS = 10;

  private proposedCombinations!: Color[][];

  constructor() {
    this.reset();
  }

  public addCombination(combination: Color[]): void {
    this.proposedCombinations.push(combination);
  }

  public getResults(secretCombination: Color[]): Result[] {
    return this.proposedCombinations.map(combination => new Result(secretCombination, combination));
  }

  public reset(): void {
    this.proposedCombinations = [];
  }

  public isSolved(secretCombination: Color[]): boolean {
    if (this.proposedCombinations.length === 0) {
      return false;
    }
    return this.getResults(secretCombination).slice(-1)[0].succeeded();
  }

  public isOver(secretCombination: Color[]): boolean {
    return this.isSolved(secretCombination) || this.isGameOver()
  }

  public numOfAttempts(): number {
    return this.proposedCombinations.length;
  }

  public isGameOver(): boolean {
    return this.numOfAttempts() === Board.MAX_ATTEMPTS;
  }
}
