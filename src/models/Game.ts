import * as assert from "assert";
import { Interval } from "../utils/Interval";
import { Board } from "./Board";
import { CodeBraker } from "./CodeBraker";
import { CodeMaker } from "./CodeMaker";
import { ICodeBrakerVisitor } from "./ICodeBrakerVisitor";
import { ICodeMakerVisitor } from "./ICodeMakerVisitor";
import { MachineCodeBraker } from "./MachineCodeBraker";
import { MachineCodeMaker } from "./MachineCodeMaker";
import { NullCodeBraker } from "./NullCodeBraker";
import { NullCodeMaker } from "./NullCodeMaker";
import { Result } from "./Result";
import { UserCodeBraker } from "./UserCodeBraker";
import { UserCodeMaker } from "./UserCodeMaker";

export class Game {
  private readonly board: Board;
  private codeMaker: CodeMaker;
  private codeBraker: CodeBraker;

  constructor() {
    this.board = new Board();
    this.codeBraker = new NullCodeBraker(this.board);
    this.codeMaker = new NullCodeMaker();
  }

  public reset() {
    this.board.reset();
    this.codeBraker = new NullCodeBraker(this.board);
    this.codeMaker = new NullCodeMaker();
  }

  public setCodeMaker(type: number): void {
    assert(this.codeMaker.isNull(), "CodeMaker can not be setted twice");
    assert(this.inInterval(type, 1, 2), "CodeMaker type must be 1 or 2");
    switch (type) {
      case 1:
        this.codeMaker = new MachineCodeMaker();
        break;
      case 2:
        this.codeMaker = new UserCodeMaker();
        break;
      default:
        throw new Error("Invalid CodeMaker type");
    }
  }

  public setCodeBraker(type: number): void {
    assert(!this.codeMaker.isNull(), "CodeMaker must be set before CodeBraker");
    assert(this.codeBraker.isNull(), "CodeBraker can not be setted twice");
    assert(this.inInterval(type, 1, 2), "CodeBraker type must be 1 or 2");
    switch (type) {
      case 1:
        this.codeBraker = new MachineCodeBraker(this.board);
        break;
      case 2:
        this.codeBraker = new UserCodeBraker(this.board);
        break;
    }
  }

  public async setSecretCombination(visitor: ICodeMakerVisitor): Promise<void> {
    assert(!this.codeMaker.isNull(), "CodeMaker must be set before SecretCombination");
    assert(!this.codeBraker.isNull(), "CodeBraker must be set before SecretCombination");
    await this.codeMaker.accept(visitor);
  }

  public async addProposedCombination(visitor: ICodeBrakerVisitor): Promise<void> {
    assert(!this.codeMaker.isNull(), "CodeMaker must be set before ProposedCombination");
    assert(!this.codeBraker.isNull(), "CodeBraker must be set before ProposedCombination");
    await this.codeBraker.accept(visitor);
  }

  public isSolved(): boolean {
    return this.board.isSolved(this.codeMaker.getSecretCombination().getColors());
  }

  public isGameOver(): boolean {
    return this.board.isGameOver();
  }

  public isOver(): boolean {
    return this.board.isOver(this.codeMaker.getSecretCombination().getColors());
  }

  public getResults(): Result[] {
    return this.board.getResults(this.codeMaker.getSecretCombination().getColors());
  }

  public numOfAttempts(): number {
    return this.board.numOfAttempts();
  }

  private inInterval(type: number, arg1: number, arg2: number): boolean {
    return new Interval(arg1, arg2).isIncluded(type);
  }
}