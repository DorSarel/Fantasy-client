import { GoogleLoginResponse } from 'react-google-login';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser } from '../sagas/apis/userApi';
import * as UserActions from '../redux/userSlice';
import * as LoadingActions from '../redux/loadingSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { mutate: serverLogin } = useMutation(
    (request: { googleResp: GoogleLoginResponse; redirectPath: string }) => {
      const googleId = request.googleResp.getBasicProfile().getId();
      return getUser(googleId);
    },
    {
      onSuccess: (data, request: { googleResp: GoogleLoginResponse; redirectPath: string }) => {
        const { googleResp, redirectPath } = request;
        const userBasicProfile = googleResp.getBasicProfile();

        if (data.data) {
          dispatch(
            UserActions.setUser({
              googleId: userBasicProfile.getId(),
              name: userBasicProfile.getName(),
              email: userBasicProfile.getEmail(),
              userId: data.data.userId,
              leagueId: data.data.leagueId,
              isAdmin: data.data.isAdmin,
            })
          );
        } else {
          dispatch(
            UserActions.setGoogleUser({
              googleId: userBasicProfile.getId(),
              name: userBasicProfile.getName(),
              email: userBasicProfile.getEmail(),
            })
          );
        }

        dispatch(LoadingActions.stopLoading());

        if (redirectPath) history.push(redirectPath);
      },
      onError: (error, request: { googleResp: GoogleLoginResponse; redirectPath: string }) => {
        alert('Failed to get user details from server');
        history.push('/');
      },
    }
  );

  return {
    serverLogin,
  };
};
