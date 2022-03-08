import { Combination } from "../../models/Combination";
import { ICodeBrakerVisitor } from "../../models/ICodeBrakerVisitor";
import { MachineCodeBraker } from "../../models/MachineCodeBraker";
import { UserCodeBraker } from "../../models/UserCodeBraker";
import { BoardView } from "./BoardView";
import { FinishView } from "./FinishView";
import { ReadCombinationView } from "./ReadCombinationView";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class PlayView extends WithGameConsoleView implements ICodeBrakerVisitor {
  public async interact(): Promise<void> {
    do {
      new BoardView(this.game).interact();
      await this.game.addProposedCombination(this);
    } while (!this.game.isOver())
    new BoardView(this.game).interact();
    new FinishView(this.game).interact();
  }

  public async visitUserCodeBraker(codeBraker: UserCodeBraker): Promise<void> {
    const colors = await new ReadCombinationView(this.game).read();
    codeBraker.addCombination(new Combination(colors));
  }

  visitMachineCodeBraker(codeBraker: MachineCodeBraker): void {
    codeBraker.addCombination(codeBraker.getRandomCombination());
  }
}
