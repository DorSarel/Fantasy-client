export interface IPlayerStore {
  players: IPlayerResponse[];
  error: null | string;
}

export interface IPlayerResponse extends IPlayerWithStats {
  firstName: string;
  lastName: string;
  teamId?: number;
  playerId: number;
  height?: number;
  imagePath: string;
  jerseyNumber: number;
}

export interface IPlayerWithStats {
  player: string;
  team: string;
  poS1: string;
  poS2: string;
  predictedGames: number;
  min: number;
  fgmi: number;
  ftmi: number;
  tpm: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  to: number;
  pts: number;
  avg: number;
  progression: string;
}

export type IPlayer = IPlayerResponse;
