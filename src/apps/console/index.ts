import { ConsoleMastermind } from "./ConsoleMastermind";

async function run() {
  const mastermind = new ConsoleMastermind();
  await mastermind.play();
}

void run();
