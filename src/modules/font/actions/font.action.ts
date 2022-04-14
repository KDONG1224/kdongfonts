import { AxiosError } from "axios";
import { ActionType, createAsyncAction } from "typesafe-actions";
import { ResponseFont } from "../models/font.model";

const GET_FONT_DATA_REQUEST = "page/GET_FONT_DATA_REQUEST";
const GET_FONT_DATA_SUCCESS = "page/GET_FONT_DATA_SUCCESS";
const GET_FONT_DATA_FAILURE = "page/GET_FONT_DATA_FAILURE";

export const getFontDataAction = createAsyncAction(
  GET_FONT_DATA_REQUEST,
  GET_FONT_DATA_SUCCESS,
  GET_FONT_DATA_FAILURE
)<ResponseFont, ResponseFont, AxiosError>();

const actions = {
  getFontDataAction,
};

export type FontAction = ActionType<typeof actions>;
