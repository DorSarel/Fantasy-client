import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps } from 'react-router';
import { useHistory, useLocation } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { RootState } from '../../redux';

interface Props extends RouteProps {
  component: React.ComponentType<any>;
}

const GuardRoute = ({ component: Component, ...rest }: Props) => {
  const user = useSelector((store: RootState) => store.user.user);
  let isLoggedIn = user.tokenId !== '';
  const loginButton = useGoogleAuth('1');

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : loginButton;
      }}
    />
  );
};

export default GuardRoute;
