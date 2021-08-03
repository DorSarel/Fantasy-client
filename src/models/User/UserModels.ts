export interface IUserStore {
  user: IUser;
}

export interface ISetGoogleUser {
  googleId: string;
  name: string;
  email: string;
}

export interface ISetUser extends ISetGoogleUser {
  userId: string;
  leagueId: string;
}

export interface IUser {
  userId: string;
  googleId: string;
  name: string;
  email: string;
  leagueId: string;
  isAdmin: boolean;
}

export interface IUserInfo {
  userId: string;
  googleTokenId: string;
  leagueId: string;
  isAdmin: boolean;
}

export enum AUTH_LEVEL {
  AUTH_NONE, // Not logged in
  AUTH_PART, // logged in using google id
  AUTH_FULL, // full login
}
