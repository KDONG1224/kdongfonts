import produce from "immer";
import { createReducer } from "typesafe-actions";

import { FontAction, getFontDataAction } from "../actions/font.action";

export interface FontState {
  font: any;
}

const initialState: FontState = {
  font: undefined,
};

// export const receiptReducer = createReducer<ReceiptState, ReceiptAction>(
//   initialState
// )

export const fontReducer = createReducer<FontState, FontAction>(
  initialState
).handleAction(getFontDataAction.success, (state, action) =>
  produce(state, (draft) => {
    console.log(action);
    draft.font = action.payload;
  })
);
