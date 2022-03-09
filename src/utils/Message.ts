import { Result } from "../models/Result";
import { IO } from "./IO";

export class Message {
  public static TITLE = new Message("--- MASTERMIND ---");
  public static CODE_MAKER_TYPE = new Message("Machine code maker (1) or human code maker (2)?");
  public static CODE_BRAKER_TYPE = new Message("Machine code braker (1) or human code braker (2)?");
  public static WRONG_COMBINATION_LENGTH = new Message("Wrong combination length");
  public static WRONG_COMBINATION_COLORS = new Message("Wrong colors, they must be: rgybmc");
  public static CODE_BRAKER_WINS = new Message("You've won!!! ;-)");
  public static CODE_BRAKER_LOSES = new Message("You've lost :-( Try again!");
  public static RESULT = (result: Result) => new Message(result.toString());
  public static NUM_ATTEMPTS = (numAttempts: number) => new Message(`${numAttempts} attempt(s):`);
  public static SECRET_COMBINATION = new Message(`****`);
  public static RESUME = new Message("Do you want to continue");
  public static EMPTY = new Message("");
  public static END_GAME = new Message("--- END GAME ---");

  private readonly message: string;

  private constructor(message: string) {
    this.message = message;
  }

  public toString(): string {
    return this.message;
  }
}