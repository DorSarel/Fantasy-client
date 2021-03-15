export interface IPlayer {
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
