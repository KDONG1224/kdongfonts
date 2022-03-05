import { put, takeEvery } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import * as Actions from "../actions/font.action";
// import { fontAPI } from "../apis/font.api";
// import { ResponseFont } from "../models/font.model";
import { fontData } from "modules/fontData";

function* getFontDataSaga(
  action: ActionType<typeof Actions.getFontDataAction.request>
) {
  try {
    // const font: ResponseFont = yield call(fontAPI.getFontData, {
    //   ...action.payload,
    // });
    const font: any = [...fontData];

    yield put(Actions.getFontDataAction.success(font));
  } catch (error) {
    // yield put(Actions.getFontDataAction.failure(error));
    console.log(error);
  }
}

export function* fontSaga() {
  yield takeEvery(Actions.getFontDataAction.request, getFontDataSaga);
}
