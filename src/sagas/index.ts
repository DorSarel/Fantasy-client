import { fork } from 'redux-saga/effects';
import { playerWatcher } from './playerSaga';

export const watcher = function* () {
  yield fork(playerWatcher);
};
