import { Result } from "../../models/Result";
import { ConsoleView } from "./ConsoleView";

export class ResultView extends ConsoleView {
  private readonly result: Result;

  constructor(result: Result) {
    super();
    this.result = result;
  }

  public print() {
    this.io.writeString(
      `${this.result.getColors().join('')} --> ${this.result.getBlackPegs()} blacks and ${this.result.getWhitePegs()} whites`
    );
  }
}