import { Game } from "../models/Game";
import { View } from "../views/View";

export abstract class Mastermind {
  protected readonly game: Game;

  constructor() {
    this.game = new Game();
  }

  public async play(): Promise<void> {
    const view = this.getView();
    do {
      await view.start();
      await view.play();
    } while (await view.resume())
  }

  protected abstract getView(): View;
}