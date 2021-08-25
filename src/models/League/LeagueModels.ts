import { IPlayer } from '../Player/PlayerModels';

export interface ICreateLeagueRequest {
  leagueName: string;
  numberOfTeams: number;
  participants: Participant[];
  leagueCreator: LeagueCreator;
}

export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
}

export interface LeagueCreator extends Participant {
  googleTokenId: string;
  teamName: string;
  nickName: string;
}

export interface JoinLeagueRequest extends LeagueCreator {
  leagueId: string;
}

export interface ILeagueInfo {
  leagueId: string;
  name: string;
  creatorName: string;
  leagueStatus: number;
  allTeams: ITeam[];
}

export interface ITeam {
  id: string;
  userId: string;
  name: string;
  picture: number[];
  positionInLeague: number;
  nbaPlayers: IPlayer[];
}

export enum LeagueStatus {
  Init = 0,
  Draft,
  Ready,
}

export interface ICompleteDraftRequest {
  leagueId: string;
  nbaPlayersId: {
    [teamId: string]: number[];
  };
}
