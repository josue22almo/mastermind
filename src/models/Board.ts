import { Color } from "./Color";
import { ProposedCombination } from "./ProposedCombination";
import { Result } from "./Result";
import { SecretCombination } from "./SecretCombination";

export class Board {
  private secretCombination!: SecretCombination;
  private results!: Result[];

  constructor() {
    this.reset();
  }

  public proposeCombination(colors: Color[]): void {
    const proposedCombination = new ProposedCombination(colors);
    const result = this.secretCombination.compare(proposedCombination);
    this.results.push(result);
  }

  public getResults(): Result[] {
    return this.results;
  }

  public reset(): void {
    this.secretCombination = new SecretCombination();
    this.secretCombination.random();
    this.results = [];
  }

  public isSolved(): boolean {
    if (this.results.length === 0) {
      return false;
    }
    return this.results.slice(-1)[0].succeeded();
  }

  public numOfAttempts(): number {
    return this.results.length;
  }

  public isGameOver(): boolean {
    return this.numOfAttempts() === 10;
  }
}
