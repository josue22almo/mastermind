import { CodeMaker } from "./CodeMaker";
import { ICodeMakerVisitor } from "./ICodeMakerVisitor";

export class UserCodeMaker extends CodeMaker {
  constructor() {
    super()
  }

  public async accept(visitor: ICodeMakerVisitor): Promise<void> {
    await visitor.visitUserCodeMaker(this);
  }
}
