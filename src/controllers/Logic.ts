import { EState } from "../models/EState";
import { Game } from "../models/Game";
import { State } from "../models/State";
import { Controller } from "./Controller";
import { InGameController } from "./InGameController";
import { NullController } from "./NullController";
import { ResumeController } from "./ResumeController";
import { StartController } from "./StartController";

export class Logic {
  private readonly game: Game;
  private readonly state: State;
  private readonly controllers: Map<EState, Controller>;

  constructor() {
    this.game = new Game();
    this.state = new State();
    this.controllers = new Map<EState, Controller>();
    this.controllers.set(EState.START, new StartController(this.game, this.state));
    this.controllers.set(EState.IN_GAME, new InGameController(this.game, this.state));
    this.controllers.set(EState.RESUME, new ResumeController(this.game, this.state));
    this.controllers.set(EState.NULL, new NullController(this.game, this.state));
  }

  public getController(): Controller {
    return this.controllers.get(this.state.getState())!;
  }

  public isExit(): boolean {
    return this.state.isExit();
  }
}