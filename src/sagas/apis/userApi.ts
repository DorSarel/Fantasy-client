import { HttpClient } from '../../services/httpClient';

export const getUser = async (googleId: string) => {
  return await HttpClient.post('/users/GetUserDetails', { googleId });
};
