import * as assert from "assert";
import { CodeBraker } from "./CodeBraker";
import { ICodeBrakerVisitor } from "./ICodeBrakerVisitor";

export class NullCodeBraker extends CodeBraker {
  public accept(visitor: ICodeBrakerVisitor): Promise<void> {
    assert(!this.isNull());
    return Promise.resolve();
  }
  public isNull(): boolean {
    return true;
  }
}
