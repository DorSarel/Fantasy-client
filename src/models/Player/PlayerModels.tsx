export interface IPlayerStore {
  players: IPlayerResponse[];
  error: null | string;
}

export interface IPlayerResponse {
  firstName: string;
  lastName: string;
  teamId?: number;
  playerId: number;
  height?: number;
  playerInfo: {
    info: {
      jerseyNumber?: number;
      isActive: boolean;
      position: string;
    };
  };
  ImagePath: string;
}

export interface IPlayer extends IPlayerResponse {
  weeklyGames: number;
  teamName: string;
}
