import { Controller } from "./Controller";
import { IControllerVisitor } from "./IControllerVisitor";

export class NullController extends Controller {
  public async accept(visitor: IControllerVisitor): Promise<void> {
    await visitor.visitNullController(this);
  }
}