import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetGoogleUser, ISetUser, IUserStore } from '../models/User/UserModels';

const initialState: IUserStore = {
  user: {
    userId: '',
    googleId: '',
    name: '',
    email: '',
    leagueId: '',
    isAdmin: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGoogleUser: (state, { payload }: PayloadAction<ISetGoogleUser>) => {
      const { googleId, name, email } = payload;
      state.user.googleId = googleId;
      state.user.name = name;
      state.user.email = email;
    },
    setUser: (state, { payload }: PayloadAction<ISetUser>) => {
      const { userId, leagueId, googleId, name, email } = payload;
      state.user.googleId = googleId;
      state.user.name = name;
      state.user.email = email;
      state.user.userId = userId;
      state.user.leagueId = leagueId;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setGoogleUser, setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
