import { useMutation, useQueryClient } from 'react-query';
import { simulateSeasonAsync } from '../sagas/apis/leagueApi';

export const useSimulateSeason = (leagueId: string, teamId: string) => {
  const queryClient = useQueryClient();

  const { mutate: simulateSeason } = useMutation(
    () => {
      return simulateSeasonAsync(leagueId);
    },
    {
      onSuccess: (_) => {
        queryClient.invalidateQueries(['teams', { teamId }]);
        queryClient.invalidateQueries('leagueInfo');
      },
    }
  );

  return {
    simulateSeason,
  };
};
