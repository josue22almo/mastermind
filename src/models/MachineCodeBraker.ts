import { CodeBraker } from "./CodeBraker";
import { Combination } from "./Combination";
import { ICodeBrakerVisitor } from "./ICodeBrakerVisitor";

export class MachineCodeBraker extends CodeBraker {
  public async accept(visitor: ICodeBrakerVisitor): Promise<void> {
    visitor.visitMachineCodeBraker(this);
    return Promise.resolve();
  }

  public getRandomCombination(): Combination {
    return Combination.getRandomCombination();
  }
}
