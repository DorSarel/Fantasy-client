export interface IUserStore {
  user: {
    tokenId: string;
    name: string;
    email: string;
  };
}

export interface ISetUser {
  tokenId: string;
  name: string;
  email: string;
}
