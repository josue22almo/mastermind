import { Game } from "../../models/Game";
import { IO } from "../../utils/IO";

export class WithGameConsoleView {
  protected readonly game: Game;
  protected readonly io: IO;

  constructor(game: Game) {
    this.game = game;
    this.io = IO.getInstance();
  }
}