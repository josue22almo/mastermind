import { Board } from "../../models/Board";
import { View } from "../../views/console/View";

export class Mastermind {
  private readonly view: View;

  constructor() {
    this.view = new View(new Board());
  }

  public async play(): Promise<void> {
    do {
      this.view.start();
      await this.view.play();
    } while (await this.view.resume())
  }
}