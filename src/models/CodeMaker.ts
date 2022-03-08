import * as assert  from "assert";
import { Combination } from "./Combination";
import { ICodeMakerVisitor } from "./ICodeMakerVisitor";

export abstract class CodeMaker {
  private secretCombination!: Combination;

  public setSecretCombination(secretCombination: Combination): void {
    assert(!this.isNull());
    this.secretCombination = secretCombination;
  }

  public getSecretCombination(): Combination {
    assert(!this.isNull());
    return this.secretCombination;
  }

  public isNull(): boolean {
    return false;
  }

  public abstract accept(visitor: ICodeMakerVisitor): Promise<void> | void;
}
