import { useMemo } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GlobalPaths } from '../components/common/GlobalPath';
import * as UserActions from '../redux/userSlice';

const useGoogleAuth = (toPath: string) => {
  const clientId = useMemo(() => '1039436775726-vrs3g1kpvq267fqm6blqtbuf16s3u9d1.apps.googleusercontent.com', []);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const userBasicProfile = (res as GoogleLoginResponse).getBasicProfile();

    //TODO: send request to server to verify if user exist

    dispatch(
      UserActions.setUser({
        id: userBasicProfile.getId(),
        name: userBasicProfile.getName(),
        email: userBasicProfile.getEmail(),
      })
    );

    if (toPath) history.push(toPath);
  };

  const onFailure = (res: any) => {
    console.log(res);
    alert('Failed to login using google auth');
    history.push(GlobalPaths.welcomeUrl);
  };

  const { signIn } = useGoogleLogin({ onSuccess, onFailure, clientId });

  return { signIn };
};

export default useGoogleAuth;
