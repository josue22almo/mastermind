import { WithBoardView } from "./WithBoardView";

export class ResumeView extends WithBoardView {
  public async render(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
