import { Board } from "../../models/Board";
import { View } from "../View";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";
import {app, BrowserWindow} from 'electron';
import * as path  from "path";

export class DesktopView extends View {
  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;

  constructor(board: Board) {
    super(board);
    this.startView = new StartView();
    this.playView = new PlayView(this.board);
    this.resumeView = new ResumeView(this.board);

    void app.whenReady().then(async () => {
      await this.createWindow()

      app.on('activate', this.recreateWindow.bind(this))
    })

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })
  }

  private recreateWindow(): void {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) void this.createWindow()
  }

  public start(): void {
    this.startView.render();
  }

  public play(): Promise<void> {
    return this.playView.render();
  }

  public resume(): Promise<boolean> {
    return this.resumeView.render();
  }

  private async createWindow(): Promise<void> {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })

    // and load the index.html of the app.
    await mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  }
}
