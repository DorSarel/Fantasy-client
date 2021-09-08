import { IPlayer } from '../Player/PlayerModels';

export interface ITeamResponse {
  id: string;
  name: string;
  positionInLeague: number;
  players: IPlayer[];
  owner: string;
}
