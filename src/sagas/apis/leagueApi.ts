import { ICreateLeagueRequest } from '../../models/League/LeagueModels';
import { HttpClient } from '../../services/httpClient';

export const createLeagueAsync = async (request: ICreateLeagueRequest) => {
  return await HttpClient.post('/leagues/league', request);
};
