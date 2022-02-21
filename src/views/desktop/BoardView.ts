import { ResultView } from "./ResultView";
import { SecretCombinationView } from "./SecretCombinationView";
import { WithBoardView } from "./WithBoardView";

export class BoardView extends WithBoardView {
  public  render() {
    new SecretCombinationView(this.board).render();
    for(const result of this.board.getResults()) {
      new ResultView(result).print();
    }
  }
}
