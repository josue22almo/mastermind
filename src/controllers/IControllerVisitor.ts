import { InGameController } from "./InGameController";
import { NullController } from "./NullController";
import { ResumeController } from "./ResumeController";
import { StartController } from "./StartController";

export interface IControllerVisitor {
  visitStartController(controller: StartController): Promise<void>;
  visitInGameController(controller: InGameController): Promise<void>;
  visitResumeController(controller: ResumeController): Promise<void>;
  visitNullController(controller: NullController): Promise<void>;
}
