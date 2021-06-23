export interface IUserStore {
  user: {
    id: string;
    tokenId: string;
    name: string;
    email: string;
  };
}

export interface ISetUser {
  id: string;
  tokenId: string;
  name: string;
  email: string;
}
