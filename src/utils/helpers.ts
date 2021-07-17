import { AUTH_LEVEL, IUser } from '../models/User/UserModels';

export const GetAuthLevel = (user: IUser) => {
  if (user.googleId !== '' && user.userId === '') return AUTH_LEVEL.AUTH_PART;
  if (user.googleId !== '' && user.userId !== '') return AUTH_LEVEL.AUTH_FULL;

  return AUTH_LEVEL.AUTH_NONE;
};
