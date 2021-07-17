import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { AUTH_LEVEL } from '../../models/User/UserModels';
import { RootState } from '../../redux';
import { GetAuthLevel } from '../../utils/helpers';

interface Props {
  to: string;
  children: React.ReactNode;
}

const GuardLink = ({ to, children }: Props) => {
  const user = useSelector((store: RootState) => store.user.user);
  const authLevel = GetAuthLevel(user);
  const { signIn } = useGoogleAuth(to);

  return authLevel >= AUTH_LEVEL.AUTH_PART ? (
    <Link to={to}>{children}</Link>
  ) : (
    <a href="#" onClick={signIn}>
      {children}
    </a>
  );
};

export default GuardLink;
