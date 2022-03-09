import { Controller } from "./Controller";
import { IControllerVisitor } from "./IControllerVisitor";

export class ResumeController extends Controller {
  public reset() {
    this.game.reset();
    this.state.reset();
  }

  public async accept(visitor: IControllerVisitor): Promise<void> {
    await visitor.visitResumeController(this);
  }
}