import { put, takeEvery } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import * as Actions from "../actions/font.action";
// import { fontAPI } from "../apis/font.api";
// import { ResponseFont } from "../models/font.model";
import { fontData } from "lib/fontData";

// function* getReceiptList(
//   action: ActionType<typeof Actions.getReceiptListAction.request>
// ) {
//   try {
//     const receipt: ResponseReceiptList = yield call(
//       receiptAPI.getUserReceiptList,
//       {
//         ...action.payload
//       }
//     );

//     yield put(Actions.getReceiptListAction.success(receipt));
//   } catch (error) {
//     yield put(Actions.getReceiptListAction.failure(error));
//   }
// }

function* getFontDataSaga(
  action: ActionType<typeof Actions.getFontDataAction.request>
) {
  try {
    // const font: ResponseFont = yield call(fontData, {
    //   ...action.payload,
    // });

    //     const receipt: ResponseReceiptList = yield call(
    //       receiptAPI.getUserReceiptList,
    //       {
    //         ...action.payload
    //       }
    //     );

    const font: any = fontData;
    console.log("font : ", font);
    yield put(Actions.getFontDataAction.success(font));
  } catch (error) {
    // yield put(Actions.getFontDataAction.failure(error));
    console.log(error);
  }
}

export function* fontSaga() {
  yield takeEvery(Actions.getFontDataAction.request, getFontDataSaga);
}
