import { ConsoleView } from "./ConsoleView";

export class StartView extends ConsoleView {
  public render(): void {
    this.io.writeString('Welcome to Mastermind!');
  }
}