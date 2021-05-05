export interface IUserStore {
  user: {
    tokenId: string;
    name: string;
  };
}

export interface ISetUser {
  tokenId: string;
  name: string;
}
