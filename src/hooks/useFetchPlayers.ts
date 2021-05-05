import { useQuery } from 'react-query';
import { IPlayer, IPlayerResponse } from '../models/Player/PlayerModels';
import { getPlayers } from '../sagas/apis/playerApi';

export const useFetchPlayers = () => {
  return useQuery(
    'players',
    async () => {
      const { data }: { data: IPlayerResponse[] } = await getPlayers();

      return data.map<IPlayer>((playerRes) => ({
        ...playerRes,
        teamName: 'Los Angels Lakers',
        weeklyGames: 3,
      }));
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
