import { Color } from "./Color";
import { Combination } from "./Combination";
import { ProposedCombination } from "./ProposedCombination";
import { Result } from "./Result";

export class SecretCombination extends Combination {
  public random(): void {
    // this.colors = (
    //   [
    //     Color.RED,
    //     Color.GREEN,
    //     Color.YELLOW,
    //     Color.BLUE,
    //     Color.MAGENTA,
    //     Color.CYAN,
    //   ].sort(() => Math.random() - 0.5).slice(0, 4)
    // );
    this.colors = [
      Color.BLUE,
      Color.YELLOW,
      Color.CYAN,
      Color.RED,
      // bycr
    ]
  }

  public compare(proposedCombination: ProposedCombination): Result {
    return new Result(
      proposedCombination.getColors(),
      this.getBlacks(proposedCombination),
      this.getWhites(proposedCombination)
    );
  }

  private getBlacks(proposedCombination: ProposedCombination): number {
    let result = 0;
    for (let i = 0; i < 4; i++) {
      if (this.colors[i] === proposedCombination.getColors()[i]) {
        result++;
      }
    }
    return result;
  }

  private getWhites(proposedCombination: ProposedCombination): number {
    const visited = [false, false, false, false];
    let result = 0;
    for (let i = 0; i < 4; i++) {
      if (this.colors[i] === proposedCombination.getColors()[i]) {
        break;
      }
      for (let j = 0; j < 4; j++) {
        if (visited[j]) {
          continue;
        }
        if (this.colors[i] === proposedCombination.getColors()[j]) {
          result++;
          visited[j] = true;
          break;
        }
      }
    }
    return result;
  }
}
