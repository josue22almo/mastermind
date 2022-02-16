import { BoardView } from "./BoardView";
import { FinishView } from "./FinishView";
import { ProposedCombinationView } from "./ProposedCombinationView";
import { WithBoardConsoleView } from "./WithBoardConsoleView";

export class PlayView extends WithBoardConsoleView {
  public async render(): Promise<void> {
    do {
      new BoardView(this.board).render();
      const colors = await new ProposedCombinationView().read();
      this.board.proposeCombination(colors);
    } while (!this.board.isSolved() || this.board.isGameOver())
    new FinishView(this.board).render();
  }
}
