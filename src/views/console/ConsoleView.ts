import { IO } from "../../utils/IO";

export class ConsoleView {
  protected readonly io: IO;

  constructor() {
    this.io = new IO();
  }
}