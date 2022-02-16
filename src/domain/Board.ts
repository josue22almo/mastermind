import { ProposedCombination } from "./ProposedCombination";
import { Result } from "./Result";
import { SecretCombination } from "./SecretCombination";
import { IO } from "./utils/IO";

export class Board {
  private secretCombination!: SecretCombination;
  private results!: Result[];

  constructor() {
    this.reset();
  }

  public async proposeCombination(): Promise<void> {
    const proposedCombination = new ProposedCombination();
    await proposedCombination.read();
    const result = this.secretCombination.compare(proposedCombination);
    this.results.push(result);
  }

  public reset(): void {
    this.secretCombination = new SecretCombination();
    this.secretCombination.random();
    this.results = [];
  }

  public finish() {
    const io = new IO();
    if (this.isSolved()) {
      io.writeString("You've won!!! ;-)");
    } else if (this.isGameOver()) {
      io.writeString("You've lost :-( Try again!");
    }
  }

  public isSolved(): boolean {
    if (this.results.length === 0) {
      return false;
    }
    return this.results.slice(-1)[0].succeeded();
  }

  public isGameOver(): boolean {
    return this.results.length === 10;
  }

  public  print() {
    this.writeSecretCombination();
    for(const result of this.results) {
      result.print();
    }
  }

  private writeSecretCombination() {
    const io = new IO();
    io.writeString('\n');
    io.writeString(`${this.results.length} attempt(s):`);
    io.writeString(`****`);
  }
}
