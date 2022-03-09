import { InGameController } from "../../controllers/InGameController";
import { ResultView } from "./ResultView";
import { SecretCombinationView } from "./SecretCombinationView";
import { WithConsoleView } from "./WithConsoleView";

export class BoardView extends WithConsoleView {
  public  interact(controller: InGameController) {
    new SecretCombinationView().interact(controller);
    for(const result of controller.getResults()) {
      new ResultView(result).print();
    }
  }
}
