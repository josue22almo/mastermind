import { ResultView } from "./ResultView";
import { SecretCombinationView } from "./SecretCombinationView";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class BoardView extends WithGameConsoleView {
  public  interact() {
    new SecretCombinationView(this.game).interact();
    for(const result of this.game.getResults()) {
      new ResultView(result).print();
    }
  }
}
