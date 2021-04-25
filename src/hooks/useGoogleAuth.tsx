import React, { useMemo } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';

const useGoogleAuth = () => {
  const clientId = useMemo(() => '1039436775726-vrs3g1kpvq267fqm6blqtbuf16s3u9d1.apps.googleusercontent.com', []);
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(res);
  };

  const onFailure = (res: any) => {
    console.log(res);
  };

  const { signIn } = useGoogleLogin({ onSuccess, onFailure, clientId, isSignedIn: true });

  return (
    <button type="button" onClick={signIn}>
      Login With Google
    </button>
  );
};

export default useGoogleAuth;
