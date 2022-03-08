import { MachineCodeBraker } from "./MachineCodeBraker";
import { UserCodeBraker } from "./UserCodeBraker";

export interface ICodeBrakerVisitor {
  visitUserCodeBraker(codeBraker: UserCodeBraker): Promise<void>;
  visitMachineCodeBraker(codeBraker: MachineCodeBraker): void;
}
