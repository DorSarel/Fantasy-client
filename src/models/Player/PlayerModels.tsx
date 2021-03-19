export interface IPlayerStore {
  players: IPlayerResponse[];
  error: null | string;
}

export interface IPlayerResponse {
  firstName: string;
  lastName: string;
  teamId?: number;
  playerId: number;
  heightInMeters?: number;
  leagues: {
    standard: {
      jersey?: number;
      active: string;
      pos: string;
    };
  };
}

export interface IPlayer extends IPlayerResponse {
  weeklyGames: number;
  teamName: string;
}
