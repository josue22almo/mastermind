import { EState } from "./EState";

export class State {
  private state!: EState;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.state = EState.START;
  }

  public getState(): EState {
    return this.state;
  }

  public next(): void {
    const currentStateIndex = Object.values(EState).indexOf(this.state);
    this.state = Object.values(EState)[currentStateIndex + 1] as EState;
  }

  public isExit(): boolean {
    return this.state === EState.NULL;
  }
}