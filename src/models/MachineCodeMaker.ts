import { CodeMaker } from "./CodeMaker";
import { Combination } from "./Combination";
import { ICodeMakerVisitor } from "./ICodeMakerVisitor";

export class MachineCodeMaker extends CodeMaker {
  public getRandomSecretCombination(): Combination {
    return Combination.getRandomCombination();
  }

  public accept(visitor: ICodeMakerVisitor): void {
    visitor.visitMachineCodeMaker(this);
  }
}
