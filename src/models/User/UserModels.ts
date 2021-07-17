export interface IUserStore {
  user: IUser;
}

export interface ISetUser {
  id: string;
  name: string;
  email: string;
}

export interface IUser {
  userId: string;
  googleId: string;
  name: string;
  email: string;
  leagueId: string;
}

export enum AUTH_LEVEL {
  AUTH_NONE, // Not logged in
  AUTH_PART, // logged in using google id
  AUTH_FULL, // full login
}
