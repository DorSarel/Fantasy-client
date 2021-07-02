import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { RootState } from '../../redux';
import { IsGoogleLoggedIn } from '../../utils/helpers';

interface Props {
  to: string;
  children: React.ReactNode;
}

const GuardLink = ({ to, children }: Props) => {
  const user = useSelector((store: RootState) => store.user.user);
  let isLoggedIn = IsGoogleLoggedIn(user);
  const { signIn } = useGoogleAuth(to);

  return isLoggedIn ? (
    <Link to={to}>{children}</Link>
  ) : (
    <a href="#" onClick={signIn}>
      {children}
    </a>
  );
};

export default GuardLink;
