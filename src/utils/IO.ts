// eslint-disable-next-line @typescript-eslint/no-require-imports
import prompts = require("prompts");
import { Interval } from "./Interval";

export class IO {
  private static instance: IO = new IO();

  public static getInstance(): IO {
    return this.instance;
  }

  private constructor() {
    // do nothing
  }

  public async read(message: string): Promise<string> {
    const result = await prompts({
      type: 'text',
      name: 'value',
      message,
    }) as {value: string};
    return result.value;
  }

  public async readIntInRange(message: string, min: number, max: number): Promise<number> {
    let type = -1;
    do {
      type = Number(await this.read(message));
    } while (!new Interval(min, max).isIncluded(type));
    return type;
  }

  public write(message: string): void {
    process.stdout.write(message);
  }

  public writeln(message: string): void {
    this.write(`${message}\n`);
  }
}