import { ICreateLeagueRequest } from '../../models/League/LeagueModels';
import { HttpClient } from '../../services/httpClient';

export const createLeagueAsync = async (request: ICreateLeagueRequest) => {
  return await HttpClient.post('/leagues/league', request);
};

export const getLeagueInfo = async (leagueId: string) => {
  return await HttpClient.get('/leagues/get-league', null, { leagueId });
};
