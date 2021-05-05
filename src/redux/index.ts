import { combineReducers } from 'redux';
import playerReducer from './playerSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  players: playerReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
