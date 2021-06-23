import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUser, IUserStore } from '../models/User/UserModels';

const initialState: IUserStore = {
  user: {
    tokenId: '',
    name: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<ISetUser>) => {
      const { tokenId, name, email } = payload;
      state.user.tokenId = tokenId;
      state.user.name = name;
      state.user.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
