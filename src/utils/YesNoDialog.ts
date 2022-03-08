import { IO } from "./IO";

export class YesNoDialog {
  private readonly io: IO;
  constructor() {
    this.io = IO.getInstance();
  }

  public async read(message: string): Promise<boolean> {
    const answer = await this.io.read(`${message} (y/n)`);
    return answer === 'y' || answer === 'Y';
  }
}
