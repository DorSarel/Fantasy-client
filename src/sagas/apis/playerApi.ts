import { HttpClient } from '../../services/httpClient';

export const getPlayers = async () => {
  return await HttpClient.get('players/all-players-temp');
};
