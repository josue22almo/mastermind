import { Result } from "../models/Result";
import { IO } from "../utils/IO";

export class ResultView {
  private readonly result: Result;
  private readonly io: IO;

  constructor(result: Result) {
    this.result = result;
    this.io = new IO();
  }

  public print() {
    this.io.writeString(
      `${this.result.getColors().join('')} --> ${this.result.getBlackPegs()} blacks and ${this.result.getWhitePegs()} whites`
    );
  }
}