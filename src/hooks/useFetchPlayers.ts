import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { IPlayer, IPlayerResponse } from '../models/Player/PlayerModels';
import { RootState } from '../redux';
import { getPlayers } from '../sagas/apis/playerApi';

export const useFetchAllPlayers = (leagueId: string, shouldTriggerQuery = false) => {
  return useQuery(
    'players',
    async () => {
      const { data }: { data: IPlayerResponse[] } = await getPlayers();
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: shouldTriggerQuery,
    }
  );
};
