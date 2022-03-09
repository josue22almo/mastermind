import { Controller } from "../../controllers/Controller";
import { InGameController } from "../../controllers/InGameController";
import { ResumeController } from "../../controllers/ResumeController";
import { StartController } from "../../controllers/StartController";
import { View } from "../View";
import { EndGameView } from "./EndGameView";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";

export class ConsoleView extends View {
  public async visitStartController(controller: StartController): Promise<void> {
    await new StartView().interact(controller);
  }

  public async visitInGameController(controller: InGameController): Promise<void> {
    await new PlayView().interact(controller);
  }

  public async visitResumeController(controller: ResumeController): Promise<void> {
    await new ResumeView().interact(controller);
  }

  public visitNullController(): Promise<void> {
    new EndGameView().interact();
    return Promise.resolve();
  }

  public async interact(controller: Controller): Promise<void> {
    await controller.accept(this);
  }
}
