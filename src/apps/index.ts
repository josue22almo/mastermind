import { Mastermind } from "./console/Mastermind";

async function run() {
  const mastermind = new Mastermind();
  await mastermind.play();
}

void run();
