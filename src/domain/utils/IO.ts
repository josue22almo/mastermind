// eslint-disable-next-line @typescript-eslint/no-require-imports
import prompts = require("prompts");

export class IO {
  public async readString(message: string): Promise<string> {
    const result = await prompts({
      type: 'text',
      name: 'value',
      message,
    }) as {value: string};
    return result.value;
  }

  public writeString(message: string): void {
    console.log(message);
  }
}