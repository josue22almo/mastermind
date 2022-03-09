import { InGameController } from "../../controllers/InGameController";
import { Combination } from "../../models/Combination";
import { ICodeBrakerVisitor } from "../../models/ICodeBrakerVisitor";
import { MachineCodeBraker } from "../../models/MachineCodeBraker";
import { UserCodeBraker } from "../../models/UserCodeBraker";
import { BoardView } from "./BoardView";
import { FinishView } from "./FinishView";
import { ReadCombinationView } from "./ReadCombinationView";
import { WithConsoleView } from "./WithConsoleView";

export class PlayView extends WithConsoleView implements ICodeBrakerVisitor {
  public async interact(controller: InGameController): Promise<void> {
    do {
      new BoardView().interact(controller);
      await controller.addProposedCombination(this);
    } while (!controller.isOver())
    new BoardView().interact(controller);
    new FinishView().interact(controller);
  }

  public async visitUserCodeBraker(codeBraker: UserCodeBraker): Promise<void> {
    const colors = await new ReadCombinationView().read();
    codeBraker.addCombination(new Combination(colors));
  }

  visitMachineCodeBraker(codeBraker: MachineCodeBraker): void {
    codeBraker.addCombination(codeBraker.getRandomCombination());
  }
}
