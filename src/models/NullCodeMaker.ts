import * as assert  from "assert";
import { CodeMaker } from "./CodeMaker";
import { ICodeMakerVisitor } from "./ICodeMakerVisitor";

export class NullCodeMaker extends CodeMaker {
  public isNull(): boolean {
    return true;
  }

  public accept(visitor: ICodeMakerVisitor): void {
    assert(!this.isNull());
  }
}
