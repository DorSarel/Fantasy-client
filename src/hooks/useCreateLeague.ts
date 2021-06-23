import { useMutation } from 'react-query';
import { ICreateLeagueRequest } from '../models/League/LeagueModels';
import { createLeagueAsync } from '../sagas/apis/leagueApi';

export const useCreateLeague = () => {
  const { mutate: createLeague } = useMutation(
    (request: ICreateLeagueRequest) => {
      return createLeagueAsync(request);
    },
    {
      onSuccess: (data, request: ICreateLeagueRequest) => {
        console.log('Created league successfully');
      },
      onError: (error, request: ICreateLeagueRequest) => {
        console.log('Failed to create league');
      },
    }
  );

  return {
    createLeague,
  };
};
