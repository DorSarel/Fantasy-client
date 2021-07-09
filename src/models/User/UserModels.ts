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
