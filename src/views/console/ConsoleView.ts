import { Game } from "../../models/Game";
import { View } from "../View";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";

export class ConsoleView extends View {
  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;

  constructor(game: Game) {
    super(game);
    this.startView = new StartView(this.game);
    this.playView = new PlayView(this.game);
    this.resumeView = new ResumeView(this.game);
  }

  public async start(): Promise<void> {
    await this.startView.interact();
  }

  public play(): Promise<void> {
    return this.playView.interact();
  }

  public resume(): Promise<boolean> {
    return this.resumeView.interact();
  }
}
