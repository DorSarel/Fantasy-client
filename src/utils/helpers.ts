import { IUser } from '../models/User/UserModels';

export const IsGoogleLoggedIn = (user: IUser) => {
  return user.googleId !== '';
};

export const IsUserLoggedIn = (user: IUser) => {
  return IsGoogleLoggedIn(user) && user.userId !== '';
};
