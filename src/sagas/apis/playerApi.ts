import { HttpClient } from '../../services/httpClient';

export const getPlayers = async () => {
  return await HttpClient.get('stats/query');
};

export const getTopStats = async (intLimit: number) => {
  return await HttpClient.post('stats/top-stats', intLimit);
};
