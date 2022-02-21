import { Board } from "../../models/Board";
import { View } from "../View";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";

export class ConsoleView extends View {
  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;

  constructor(board: Board) {
    super(board);
    this.startView = new StartView();
    this.playView = new PlayView(this.board);
    this.resumeView = new ResumeView(this.board);
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
