import { IO } from "./IO";

export class YesNoDialog {
  private readonly io: IO;
  constructor() {
    this.io = new IO();
  }

  public async read(message: string): Promise<boolean> {
    const answer = await this.io.readString(`${message} (y/n)`);
    return answer === 'y' || answer === 'Y';
  }
}
