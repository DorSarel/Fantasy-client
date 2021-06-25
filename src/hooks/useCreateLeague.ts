import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { GlobalPaths } from '../components/common/GlobalPath';
import { ICreateLeagueRequest } from '../models/League/LeagueModels';
import { createLeagueAsync } from '../sagas/apis/leagueApi';

export const useCreateLeague = () => {
  const history = useHistory();
  const { mutate: createLeague } = useMutation(
    (request: ICreateLeagueRequest) => {
      return createLeagueAsync(request);
    },
    {
      onSuccess: (data, request: ICreateLeagueRequest) => {
        console.log('Created league successfully');
        alert('League was created. Redirecting in 2 seconds');

        setTimeout(() => {
          history.push(GlobalPaths.myTeamUrl);
        }, 2000);
      },
      onError: (error, request: ICreateLeagueRequest) => {
        console.log('Failed to create league');
        alert('Failed to create league');
      },
    }
  );

  return {
    createLeague,
  };
};
