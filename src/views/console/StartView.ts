import { IOView } from "./IOView";

export class StartView extends IOView {
  public render(): void {
    this.io.writeString('Welcome to Mastermind!');
  }
}