import { Mastermind } from "../domain/Mastermind";

async function run() {
  const mastermind = new Mastermind();
  await mastermind.play();
}

void run();
