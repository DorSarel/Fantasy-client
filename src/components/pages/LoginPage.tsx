import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { RootState } from '../../redux';
import { IsGoogleLoggedIn } from '../../utils/helpers';

const LoginPage = () => {
  const location = useLocation<{ from: string }>();
  const { signIn } = useGoogleAuth(location?.state.from);
  const user = useSelector((store: RootState) => store.user.user);
  let isLoggedIn = IsGoogleLoggedIn(user);

  useEffect(() => {
    if (!isLoggedIn) {
      signIn();
    }
  }, [isLoggedIn, signIn]);
  return <div></div>;
};

export default LoginPage;
