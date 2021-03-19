import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerResponse, IPlayerStore } from '../models/Player/PlayerModels';

const initialState: IPlayerStore = {
  players: [] as IPlayerResponse[],
  error: null,
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    fetchPlayers: (state) => {
      state.error = null;
    },
  },
});

export const { fetchPlayers } = playerSlice.actions;
export default playerSlice.reducer;
