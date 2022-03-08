import { Game } from "../models/Game";

export abstract class View {
  protected readonly game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public abstract start(): Promise<void>;

  public abstract play(): Promise<void>

  public abstract resume(): Promise<boolean>
}
