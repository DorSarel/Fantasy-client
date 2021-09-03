import { useQuery } from 'react-query';
import { getTeamById } from '../sagas/apis/teamApi';
import { IsStringNullOrEmpty } from '../utils/helpers';

export const useFetchTeamById = (leagueId: string, teamId: string) => {
  return useQuery(
    ['teams', { teamId }],
    async () => {
      const { data } = await getTeamById(leagueId, teamId);
      
      return data;
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: !IsStringNullOrEmpty(leagueId) && !IsStringNullOrEmpty(teamId),
    }
  );
};
