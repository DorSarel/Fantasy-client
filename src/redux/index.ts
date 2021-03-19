import { combineReducers } from 'redux';
import playerReducer from './playerSlice';

const rootReducer = combineReducers({
  players: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
