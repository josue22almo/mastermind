import { CodeBraker } from "./CodeBraker";
import { ICodeBrakerVisitor } from "./ICodeBrakerVisitor";

export class UserCodeBraker extends CodeBraker {
  public async accept(visitor: ICodeBrakerVisitor): Promise<void> {
    await visitor.visitUserCodeBraker(this);
  }
}
