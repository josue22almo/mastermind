import { Result } from "../../models/Result";
import { Message } from "../../utils/Message";
import { WithConsoleView } from "./WithConsoleView";

export class ResultView extends WithConsoleView {
  private readonly result: Result;
  constructor(result: Result) {
    super();
    this.result = result;
  }

  public print() {
    this.io.writeln(Message.RESULT(this.result).toString());
  }
}