import { Result } from "../../models/Result";
import { IOView } from "./IOView";

export class ResultView extends IOView {
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