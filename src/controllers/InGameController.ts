import { ICodeBrakerVisitor } from "../models/ICodeBrakerVisitor";
import { Result } from "../models/Result";
import { Controller } from "./Controller";
import { IControllerVisitor } from "./IControllerVisitor";

export class InGameController extends Controller {
  public isGameOver(): boolean {
    return this.game.isGameOver();
  }

  public isSolved(): boolean {
    return this.game.isSolved();
  }

  public async accept(visitor: IControllerVisitor): Promise<void> {
    await visitor.visitInGameController(this);
  }

  public async proposeCombination(visitor: ICodeBrakerVisitor): Promise<void> {
    await this.game.addProposedCombination(visitor);
  }

  public numOfAttempts(): number {
    return this.game.numOfAttempts();
  }

  async addProposedCombination(codeBrakerVisitor: ICodeBrakerVisitor) {
    await this.game.addProposedCombination(codeBrakerVisitor);
  }

  public getResults(): Result[] {
    return this.game.getResults();
  }

  public isOver(): boolean {
    return this.game.isOver();
  }
}