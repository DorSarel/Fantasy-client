import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';

const LoginPage = () => {
  const location = useLocation<{ from: string }>();
  const { signIn } = useGoogleAuth(location?.state.from);
  const user = useSelector((store: RootState) => store.user.user);
  const authLevel = GetAuthLevel(user);

  useEffect(() => {
    if (authLevel === AUTH_LEVEL.AUTH_NONE) {
      signIn();
    }
  }, [authLevel, signIn]);
  return <div></div>;
};

export default LoginPage;
