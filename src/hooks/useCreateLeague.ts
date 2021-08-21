import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { GlobalPaths } from '../components/common/GlobalPath';
import { ICreateLeagueRequest, JoinLeagueRequest } from '../models/League/LeagueModels';
import { createLeagueAsync, joinLeagueAsync } from '../sagas/apis/leagueApi';

export const useCreateLeague = () => {
  const history = useHistory();

  const { mutate: createLeague } = useMutation(
    (request: ICreateLeagueRequest) => {
      return createLeagueAsync(request);
    },
    {
      onSuccess: ({ data: leagueId }, request: ICreateLeagueRequest) => {
        console.log('Created league successfully');
        alert('League was created');

        history.push(`${GlobalPaths.draft}/${leagueId}`);
      },
      onError: (error, request: ICreateLeagueRequest) => {
        console.log('Failed to create league');
        alert('Failed to create league');
      },
    }
  );

  const { mutate: joinLeague } = useMutation(
    (request: JoinLeagueRequest) => {
      return joinLeagueAsync(request);
    },
    {
      onSuccess: (data, request: JoinLeagueRequest) => {
        console.log(`Joined league successfully`);
        alert('Joining was successfull. Redirecting in 1 seconds');

        setTimeout(() => {
          history.push(GlobalPaths.welcomeUrl);
        }, 2000);
      },
      onError: (error) => {
        console.log('faled to join league');
      },
    }
  );

  return {
    createLeague,
    joinLeague,
  };
};
