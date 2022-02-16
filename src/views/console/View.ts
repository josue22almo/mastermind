import { Board } from "../../models/Board";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";

export class View {
  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;

  constructor(board: Board) {
    this.startView = new StartView();
    this.playView = new PlayView(board);
    this.resumeView = new ResumeView(board);
  }

  public start(): void {
    this.startView.render();
  }

  public play(): Promise<void> {
    return this.playView.render();
  }

  public resume(): Promise<boolean> {
    return this.resumeView.render();
  }
}
