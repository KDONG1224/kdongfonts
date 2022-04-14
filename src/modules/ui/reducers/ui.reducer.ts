/* eslint-disable @typescript-eslint/no-empty-function */
import { createReducer } from 'typesafe-actions';
import { produce } from 'immer';

import {
  UiAction,
  OPEN_MAIN_NAV,
  CLOSE_MAIN_NAV,
  pageLoaderAction,
  activeMenuStyleAction,
  pageLoaderForceQuitMessageAction,
  pageLoaderForceQuitAction,
  popupAction,
  pathAction,
  modalAction,
  resetModalAction,
  toastAction,
  resetToastAction
} from '../actions/ui.action';
export interface ModalDafault {
  visible: boolean;
  message: JSX.Element | string;
  handleOnComplete?: () => void;
  handleOnCancel?: () => void;
  modaltype?: 'info' | 'confirm';
  depth?: boolean;
  cancelTxt?: string;
  okText?: string;
}
const initModal = {
  visible: false,
  message: '',
  handleOnComplete: undefined,
  handleOnCancel: undefined,
  modaltype: undefined,
  depth: false,
  cancelTxt: '취소',
  okText: '확인'
};

export interface UiState {
  calledActions: string[];
  openMainNav: boolean;
  pageLoading: boolean;
  noticeMessage?: string;
  activeStore: string;
  isModalVisible: boolean | null;
  current: string;
  prev: string;
  cancelTxt?: string;
  okText?: string;
  modaltype?: string;
  modal: ModalDafault;
  toastStatus: boolean;
}

const initialState: UiState = {
  calledActions: [],
  openMainNav: false,
  pageLoading: false,
  noticeMessage: '',
  activeStore: '01',
  isModalVisible: null,
  current: '',
  prev: '',
  cancelTxt: '',
  okText: '',
  modaltype: '',
  modal: initModal,
  toastStatus: false
};

export const uiReducer = createReducer<UiState, UiAction>(initialState, {
  [OPEN_MAIN_NAV]: state =>
    produce(state, draft => {
      draft.openMainNav = true;
    }),
  [CLOSE_MAIN_NAV]: state =>
    produce(state, draft => {
      draft.openMainNav = false;
    })
})
  .handleAction(pageLoaderAction, (state, action) =>
    produce(state, draft => {
      const { actionType } = action.payload;

      if (/REQUEST/gi.test(actionType)) {
        draft.calledActions = draft.calledActions.concat(
          actionType.replace(/_REQUEST/gi, '')
        );
      }

      if (/SUCCESS|FAILURE/gi.test(actionType)) {
        draft.calledActions = draft.calledActions.filter(
          v => v !== actionType.replace(/_SUCCESS|_FAILURE/gi, '')
        );
      }
      draft.pageLoading = draft.calledActions.length ? true : false;
    })
  )
  .handleAction(pageLoaderForceQuitMessageAction, (state, action) =>
    produce(state, draft => {
      const { noticeMessage } = action.payload;
      draft.calledActions = [];
      draft.pageLoading = false;
      draft.noticeMessage = noticeMessage;
      draft.isModalVisible = true;
    })
  )
  .handleAction(pageLoaderForceQuitAction, state =>
    produce(state, draft => {
      draft.calledActions = [];
      draft.pageLoading = false;
    })
  )
  .handleAction(activeMenuStyleAction, (state, action) =>
    produce(state, draft => {
      draft.activeStore = action.payload.activeStore;
    })
  )
  .handleAction(pathAction, (state, action) =>
    produce(state, draft => {
      const { prev, current } = action.payload;
      if (prev) draft.prev = prev;
      else if (current) draft.current = current;
    })
  )
  .handleAction(popupAction, (state, action) => {
    return produce(state, draft => {
      const {
        noticeMessage,
        isModalVisible,
        okText,
        cancelTxt,
        modaltype
      } = action.payload;

      draft.isModalVisible = isModalVisible;
      draft.noticeMessage = noticeMessage;
      draft.okText = okText;
      draft.cancelTxt = cancelTxt;
      draft.modaltype = modaltype;
    });
  })
  .handleAction(modalAction, (state, action) => {
    return produce(state, draft => {
      const {
        visible,
        message,
        handleOnComplete,
        handleOnCancel,
        modaltype,
        depth,
        cancelTxt,
        okText,
        pageLoading
      } = action.payload;

      if (pageLoading) draft.pageLoading = pageLoading;
      if (visible) draft.modal.visible = visible;
      if (message) draft.modal.message = message;
      if (handleOnComplete) draft.modal.handleOnComplete = handleOnComplete;
      if (handleOnCancel) draft.modal.handleOnCancel = handleOnCancel;
      if (modaltype) draft.modal.modaltype = modaltype;
      if (depth) draft.modal.depth = depth;
      if (cancelTxt) draft.modal.cancelTxt = cancelTxt;
      if (okText) draft.modal.okText = okText;
    });
  })
  .handleAction(resetModalAction, state => {
    return produce(state, draft => {
      draft.modal = {
        visible: false,
        message: '',
        handleOnComplete: undefined,
        handleOnCancel: undefined,
        modaltype: 'info',
        depth: false,
        cancelTxt: '취소',
        okText: '확인'
      };
    });
  })
  .handleAction(toastAction, state => {
    return produce(state, draft => {
      draft.toastStatus = true;
    });
  })
  .handleAction(resetToastAction, state => {
    return produce(state, draft => {
      draft.toastStatus = false;
    });
  });
