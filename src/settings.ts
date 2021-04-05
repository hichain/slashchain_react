import { Slashchain } from "./games/slashchain/game";
import { Game } from "boardgame.io";
import { Env, envs } from "./envs";

export const settings: {
  games: Game[];
  envs?: Env;
} = {
  games: [Slashchain],
  envs,
};
