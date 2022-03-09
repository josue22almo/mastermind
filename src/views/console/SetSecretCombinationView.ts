import { StartController } from "../../controllers/StartController";
import { CodeMaker } from "../../models/CodeMaker";
import { Combination } from "../../models/Combination";
import { ICodeMakerVisitor } from "../../models/ICodeMakerVisitor";
import { ReadCombinationView } from "./ReadCombinationView";
import { WithConsoleView } from "./WithConsoleView";

export class SetSecretCombinationView extends WithConsoleView implements ICodeMakerVisitor {
  public async interact(controler: StartController) {
    await controler.setSecretCombination(this);
  }

  async visitUserCodeMaker(codeMakerPlayer: CodeMaker): Promise<void> {
    const colors = await new ReadCombinationView().read();
    codeMakerPlayer.setSecretCombination(new Combination(colors));
  }

  visitMachineCodeMaker(codeMakerPlayer: CodeMaker): void {
    codeMakerPlayer.setSecretCombination(Combination.getRandomCombination());
  }
}
