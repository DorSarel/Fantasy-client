import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUser, IUserStore } from '../models/User/UserModels';

const initialState: IUserStore = {
  user: {
    userId: '',
    googleId: '',
    name: '',
    email: '',
    leagueId: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<ISetUser>) => {
      const { id, name, email } = payload;
      state.user.googleId = id;
      state.user.name = name;
      state.user.email = email;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
