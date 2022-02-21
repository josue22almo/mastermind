import { DesktopMastermind } from "./DesktopMastermind";

async function run() {
  const mastermind = new DesktopMastermind();
  await mastermind.play();
}

void run();
