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
