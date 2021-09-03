import { useQuery } from 'react-query';
import { ILeagueInfo } from '../models/League/LeagueModels';
import { getLeagueInfo } from '../sagas/apis/leagueApi';

export const useFetchLeagueInfo = (leagueId: string) => {
  return useQuery(
    'leagueInfo',
    async () => {
      const { data } = await getLeagueInfo(leagueId);
      return data;
    },
    {
      enabled: !!leagueId,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );
};
