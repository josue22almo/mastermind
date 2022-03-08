import { CodeMaker } from "../../models/CodeMaker";
import { Combination } from "../../models/Combination";
import { ICodeMakerVisitor } from "../../models/ICodeMakerVisitor";
import { ReadCombinationView } from "./ReadCombinationView";
import { WithGameConsoleView } from "./WithGameConsoleView";

export class SetSecretCombinationView extends WithGameConsoleView implements ICodeMakerVisitor{
  public async interact() {
    await this.game.setSecretCombination(this);
  }

  async visitUserCodeMaker(codeMakerPlayer: CodeMaker): Promise<void> {
    const colors = await new ReadCombinationView(this.game).read();
    codeMakerPlayer.setSecretCombination(new Combination(colors));
  }

  visitMachineCodeMaker(codeMakerPlayer: CodeMaker): void {
    codeMakerPlayer.setSecretCombination(Combination.getRandomCombination());
  }
}
