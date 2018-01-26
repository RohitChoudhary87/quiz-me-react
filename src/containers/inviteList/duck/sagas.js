import { put, call, takeEvery, delay } from 'redux-saga/effects';
import types from './types';
import actions from './actions';

async function myF() {
  const rs = await fetch('https://randomuser.me/api/?results=9');
  const result = await rs.json();
  return result;
}

function _res({ name }) {
  return name.title + ' ' + name.first + ' ' + name.last;
}

function* sagaWorker() {
  let response = yield myF();
  response = response.results.map(_res);
  yield put(actions.receiveInviteList({ response }));
}

export default function* saga() {
  yield takeEvery(types.REQUEST_INVITE_LIST, sagaWorker);
}
