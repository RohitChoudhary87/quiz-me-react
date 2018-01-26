import { fork, all } from 'redux-saga/effects';
import { saga } from '../containers/inviteList/duck';

export default function* rootSaga() {
  console.log('Root Saga is heere');
  yield saga();
}
