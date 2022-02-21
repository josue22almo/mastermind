import { BoardView } from "./BoardView";
import { FinishView } from "./FinishView";
import { ProposedCombinationView } from "./ProposedCombinationView";
import { WithBoardView } from "./WithBoardView";

export class PlayView extends WithBoardView {
  public async render(): Promise<void> {
    do {
      new BoardView(this.board).render();
      const colors = await new ProposedCombinationView().read();
      this.board.proposeCombination(colors);
    } while (this.board.isOver())
    new FinishView(this.board).render();
  }
}
