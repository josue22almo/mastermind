import { Controller } from "../controllers/Controller";
import { IControllerVisitor } from "../controllers/IControllerVisitor";
import { InGameController } from "../controllers/InGameController";
import { NullController } from "../controllers/NullController";
import { ResumeController } from "../controllers/ResumeController";
import { StartController } from "../controllers/StartController";

export abstract class View implements IControllerVisitor {
  public abstract visitStartController(controller: StartController): Promise<void>;

  public abstract visitInGameController(controller: InGameController): Promise<void>;

  public abstract visitResumeController(controller: ResumeController): Promise<void>;

  public abstract visitNullController(controller: NullController): Promise<void>;

  public abstract interact(controller: Controller): Promise<void>;
}
