import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';

const GuardRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((store: RootState) => store.user.user);
  const authLevel = GetAuthLevel(user);

  return (
    <Route
      {...rest}
      render={(props) => (authLevel >= AUTH_LEVEL.AUTH_PART ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
    />
  );
};

export default GuardRoute;
