import { Logic } from "../controllers/Logic";
import { View } from "../views/View";

export abstract class Mastermind {
  protected readonly logic: Logic;
  protected readonly view: View;

  constructor() {
    this.logic = new Logic();
    this.view = this.getView();
  }

  public async play(): Promise<void> {
    do {
      await this.view.interact(this.logic.getController());
    } while (!this.logic.isExit());
  }

  protected abstract getView(): View;
}