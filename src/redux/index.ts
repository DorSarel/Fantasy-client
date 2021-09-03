import { combineReducers } from 'redux';
import playerReducer from './playerSlice';
import userReducer from './userSlice';
import loadingReducer from './loadingSlice';

const rootReducer = combineReducers({
  players: playerReducer,
  user: userReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
