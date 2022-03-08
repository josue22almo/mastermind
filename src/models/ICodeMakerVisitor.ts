import { CodeMaker } from "./CodeMaker";

export interface ICodeMakerVisitor {
  visitUserCodeMaker(codeMakerPlayer: CodeMaker): Promise<void>;
  visitMachineCodeMaker(codeMakerPlayer: CodeMaker): void;
}
