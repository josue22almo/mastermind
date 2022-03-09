import { IO } from "../../utils/IO";

export class WithConsoleView {
  protected readonly io: IO;

  constructor() {
    this.io = IO.getInstance();
  }
}