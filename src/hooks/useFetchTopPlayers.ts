import { useQuery } from 'react-query';
import { IPlayerResponse } from '../models/Player/PlayerModels';
import { getTopStats } from '../sagas/apis/playerApi';

export const useFetchTopPlayers = () => {
  return useQuery(
    'top_players',
    async () => {
      const { data }: { data: {
          topScorers: IPlayerResponse[],
          topAssists: IPlayerResponse[],
          topRebounds: IPlayerResponse[]
      } } = await getTopStats();
      console.log(data);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
