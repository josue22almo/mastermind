import { Game } from "../models/Game";
import { State } from "../models/State";
import { IControllerVisitor } from "./IControllerVisitor";

export abstract class Controller {
  protected readonly game: Game;
  protected readonly state: State;

  constructor(game: Game, state: State) {
    this.game = game;
    this.state = state;
  }

  public abstract accept(visitor: IControllerVisitor): Promise<void>;

  public next(): void {
    this.state.next();
  }
}