import { Board } from "../models/Board";
import { View } from "../views/View";

export abstract class Mastermind {
  protected readonly board: Board;

  constructor() {
    this.board = new Board();
  }

  public async play(): Promise<void> {
    const view = this.getView();
    do {
      view.start();
      await view.play();
    } while (await view.resume())
  }

  protected abstract getView(): View;
}