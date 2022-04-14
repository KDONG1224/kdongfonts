import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { all, fork } from "redux-saga/effects";

import { FontState, fontSaga, fontReducer } from "./font";

export interface Indexable {
  [key: string]: any;
}

export interface StoreState {
  [x: string]: any;
  router: RouterState;
  fontState: FontState;
}

export function* saga() {
  yield all([fork(fontSaga)]);
}

const reducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    fontState: fontReducer,
  });

export default reducer;
