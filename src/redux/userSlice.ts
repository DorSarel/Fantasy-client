import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUser, IUserStore } from '../models/User/UserModels';

const initialState: IUserStore = {
  user: {
    tokenId: '',
    name: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<ISetUser>) => {
      const { tokenId, name } = payload;
      state.user.tokenId = tokenId;
      state.user.name = name;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
