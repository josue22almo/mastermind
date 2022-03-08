import * as assert from "assert";
import { Board } from "./Board";
import { Combination } from "./Combination";
import { ICodeBrakerVisitor } from "./ICodeBrakerVisitor";

export abstract class CodeBraker {
  private static readonly MAX_ATTEMPTS = 10;
  private readonly combinations: Combination[];
  private readonly board: Board;

  constructor(board: Board) {
    this.board = board;
    this.combinations = [];
  }

  public addCombination(combination: Combination): void {
    assert(this.canAddCombination(), "Cannot add more combinations");
    assert(!this.isNull());
    this.combinations.push(combination);
    this.board.addCombination(combination.getColors());
  }

  private canAddCombination(): boolean {
    return this.combinations.length < CodeBraker.MAX_ATTEMPTS;
  }

  public abstract accept(visitor: ICodeBrakerVisitor): Promise<void>;

  public isNull(): boolean {
    return false;
  }
}
