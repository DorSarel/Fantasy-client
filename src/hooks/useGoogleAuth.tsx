import { useMemo } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GlobalPaths } from '../components/common/GlobalPath';
import * as UserActions from '../redux/userSlice';
import { useAuth } from './useAuth';

const useGoogleAuth = (toPath: string) => {
  const clientId = useMemo(() => '1039436775726-vrs3g1kpvq267fqm6blqtbuf16s3u9d1.apps.googleusercontent.com', []);
  const dispatch = useDispatch();
  const history = useHistory();
  const { serverLogin } = useAuth();

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    //TODO: send request to server to verify if user exist
    serverLogin({ googleResp: res as GoogleLoginResponse, redirectPath: toPath });
  };

  const onFailure = (res: any) => {
    // console.log(res);
    alert('Failed to login using google auth');
    history.push(GlobalPaths.welcomeUrl);
  };

  const onLogoutSuccess = () => {
    alert('Logged out successfully');

    dispatch(UserActions.logoutUser());

    history.push(GlobalPaths.welcomeUrl);
  };

  const { signIn } = useGoogleLogin({ onSuccess, onFailure, clientId });
  const { signOut } = useGoogleLogout({ clientId, onLogoutSuccess });

  return { signIn, signOut };
};

export default useGoogleAuth;
