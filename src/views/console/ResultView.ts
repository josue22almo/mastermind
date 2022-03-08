import { Result } from "../../models/Result";
import { Message } from "../../utils/Message";

export class ResultView {
  private readonly result: Result;
  constructor(result: Result) {
    this.result = result;
  }

  public print() {
    Message.RESULT(this.result).writeln();
  }
}