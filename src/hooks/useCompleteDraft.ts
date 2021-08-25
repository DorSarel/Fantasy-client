import { useMutation } from 'react-query';
import { ICompleteDraftRequest } from '../models/League/LeagueModels';
import { completeDraftEvent } from '../sagas/apis/leagueApi';
import { useHistory } from 'react-router-dom';
import { GlobalPaths } from '../components/common/GlobalPath';

export const useCompleteDraft = () => {
  const history = useHistory();

  const { mutate: completeDraft } = useMutation(
    (request: ICompleteDraftRequest) => {
      return completeDraftEvent(request);
    },
    {
      onSuccess: (_, request: ICompleteDraftRequest) => {
        console.log('Completed draft event');
        history.push(GlobalPaths.myTeamUrl);
      },
    }
  );

  return {
    completeDraft,
  };
};
