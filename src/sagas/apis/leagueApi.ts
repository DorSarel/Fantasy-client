import { ICompleteDraftRequest, ICreateLeagueRequest, JoinLeagueRequest } from '../../models/League/LeagueModels';
import { HttpClient } from '../../services/httpClient';

export const createLeagueAsync = async (request: ICreateLeagueRequest) => {
  return await HttpClient.post('/leagues/league', request);
};

export const getLeagueInfo = async (leagueId: string) => {
  return await HttpClient.get('/leagues/info', null, { leagueId });
};

export const joinLeagueAsync = async (request: JoinLeagueRequest) => {
  return await HttpClient.post('/leagues/join', request);
};

export const completeDraftEvent = async (request: ICompleteDraftRequest) => {
  return await HttpClient.post(`/leagues/${request.leagueId}/completeDraft`, request.nbaPlayersId, null);
};
