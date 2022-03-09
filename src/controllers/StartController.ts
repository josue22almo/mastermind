import { ICodeMakerVisitor } from "../models/ICodeMakerVisitor";
import { Controller } from "./Controller";
import { IControllerVisitor } from "./IControllerVisitor";

export class StartController extends Controller {
  public async accept(visitor: IControllerVisitor): Promise<void> {
    await visitor.visitStartController(this);
  }

  public setCodeBraker(type: number) {
    this.game.setCodeBraker(type);
  }

  public async setSecretCombination(codeMakerVisitor: ICodeMakerVisitor) {
    await this.game.setSecretCombination(codeMakerVisitor);
  }

  public setCodeMaker(type: number) {
    this.game.setCodeMaker(type);
  }
}