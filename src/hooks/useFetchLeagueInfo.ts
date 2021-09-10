import { useQuery } from 'react-query';
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
      refetchOnWindowFocus: true,
      retry: 1,
    }
  );
};
