import { ConsoleMastermind } from "./console/ConsoleMastermind";

async function run() {
  const mastermind = new ConsoleMastermind();
  await mastermind.play();
}

void run();
