import { useQuery } from 'react-query';
import { IPlayerResponse } from '../models/Player/PlayerModels';
import { getTopStats } from '../sagas/apis/playerApi';

export const useFetchTopPlayers = (topLimit = 3) => {
  return useQuery(
    'top_players',
    async () => {
      const {
        data,
      }: {
        data: {
          topScorers: IPlayerResponse[];
          topAssists: IPlayerResponse[];
          topRebounds: IPlayerResponse[];
        };
      } = await getTopStats(topLimit);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
