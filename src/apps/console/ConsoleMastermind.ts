import { ConsoleView } from "../../views/console/ConsoleView";
import { View } from "../../views/View";
import { Mastermind } from "../Mastermind";

export class ConsoleMastermind extends Mastermind {
  protected getView(): View {
    return new ConsoleView(this.game);
  }
}