import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../../redux';
import { IsGoogleLoggedIn } from '../../utils/helpers';

const GuardRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((store: RootState) => store.user.user);
  let isLoggedIn = IsGoogleLoggedIn(user);

  return <Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)} />;
};

export default GuardRoute;
