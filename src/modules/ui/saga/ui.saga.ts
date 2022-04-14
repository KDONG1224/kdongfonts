import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typesafe-actions';

import { pageLoaderAction } from '../actions/ui.action';

function* watchAsyncActionSaga(action: Action) {
  if (!/REQUEST|SUCCESS|FAILURE/gi.test(action.type)) {
    return;
  }
  if (
    action.type === 'auth/USERS_ID_CHECK_REQUEST' ||
    action.type === 'auth/KAKAO_LOGIN_REQUEST' ||
    action.type === 'auth/NAVER_LOGIN_REQUEST' ||
    action.type === 'auth/APPLE_LOGIN_REDIRECT_REQUEST'
  )
    return;

  yield put(
    pageLoaderAction({
      actionType: action.type
    })
  );
}

export function* uiSaga() {
  yield takeEvery('*', watchAsyncActionSaga);
}
