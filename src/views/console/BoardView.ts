import { ResultView } from "./ResultView";
import { SecretCombinationView } from "./SecretCombinationView";
import { WithBoardConsoleView } from "./WithBoardConsoleView";

export class BoardView extends WithBoardConsoleView {
  public  render() {
    new SecretCombinationView(this.board).render();
    for(const result of this.board.getResults()) {
      new ResultView(result).print();
    }
  }
}
