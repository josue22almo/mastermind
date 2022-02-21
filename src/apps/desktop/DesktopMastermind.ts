import { DesktopView } from "../../views/desktop/DesktopView";
import { View } from "../../views/View";
import { Mastermind } from "../Mastermind";

export class DesktopMastermind extends Mastermind {
  protected getView(): View {
    return new DesktopView(this.board);
  }
}