import { IO } from "../../utils/IO";

export class IOView {
  protected readonly io: IO;

  constructor() {
    this.io = new IO();
  }
}