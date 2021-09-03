import { HttpClient } from '../../services/httpClient';

export const getPlayers = async () => {
  return await HttpClient.get('stats/query');
};

export const getTopStats = async () => {
  return await HttpClient.get('stats/top-stats');
}