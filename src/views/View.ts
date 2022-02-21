import { Board } from "../models/Board";

export abstract class View {
  protected readonly board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  public abstract start(): void;

  public abstract play(): Promise<void>

  public abstract resume(): Promise<boolean>
}
