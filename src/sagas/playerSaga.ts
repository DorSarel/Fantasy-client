import { takeLatest, put, call } from 'redux-saga/effects';
import * as PlayerActions from '../redux/playerSlice';
import { getPlayers } from './apis/playerApi';

function* fetchPlayers(action: any) {
  try {
    const { data } = yield call(getPlayers);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

export function* playerWatcher() {
  yield takeLatest(PlayerActions.fetchPlayers, fetchPlayers);
}
