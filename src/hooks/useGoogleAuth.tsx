import { useMemo } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as UserActions from '../redux/userSlice';

const useGoogleAuth = (toPath: string) => {
  const clientId = useMemo(() => '1039436775726-vrs3g1kpvq267fqm6blqtbuf16s3u9d1.apps.googleusercontent.com', []);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const userBasicProfile = (res as GoogleLoginResponse).getBasicProfile();
    dispatch(
      UserActions.setUser({
        tokenId: (res as GoogleLoginResponse).getAuthResponse().id_token,
        name: userBasicProfile.getName(),
        email: userBasicProfile.getEmail(),
      })
    );

    if (toPath) history.push(toPath);
  };

  const onFailure = (res: any) => {
    console.log(res);
    alert('Failed to login using google auth');
  };

  const { signIn } = useGoogleLogin({ onSuccess, onFailure, clientId });

  return { signIn };
};

export default useGoogleAuth;
