import { ActionType, createAction } from 'typesafe-actions';

export const OPEN_MAIN_NAV = 'ui/OPEN_MAIN_NAV';
export const CLOSE_MAIN_NAV = 'ui/CLOSE_MAIN_NAV';

export const OPEN_MODAL = 'ui/OPEN_MODAL';
export const CLOSE_MODAL = 'ui/CLOSE_MODAL';

export const ACTIVE_MENU_STYLE = 'ui/ACTIVE_MENU_STYLE';

export const PATH_ACTION = 'ui/PATH_ACTION';

export const openMainNavAction = createAction(OPEN_MAIN_NAV)();
export const closeMainNavAction = createAction(CLOSE_MAIN_NAV)();
export const activeMenuStyleAction = createAction(ACTIVE_MENU_STYLE)<{
  activeStore: string;
}>();
export const pageLoaderAction = createAction('ui/PAGE_LOADER')<{
  actionType: string;
}>();
export const pageLoaderForceQuitMessageAction = createAction(
  'ui/PAGE_FORCE_QUIT_MESSAGE_LOADER'
)<{ noticeMessage?: string }>();

export const pageLoaderForceQuitAction = createAction(
  'ui/PAGE_FORCE_QUIT_LOADER'
)();

export const popupAction = createAction('ui/NOTICE_POPUP')<{
  noticeMessage?: string;
  isModalVisible: boolean;
  cancelTxt?: string;
  okText?: string;
  modaltype?: string;
}>();
export const modalAction = createAction('ui/MODAL_ACTION')<{
  visible?: boolean;
  message?: JSX.Element | string;
  handleOnComplete?: () => void;
  handleOnCancel?: () => void;
  modaltype?: 'info' | 'confirm';
  depth?: boolean;
  cancelTxt?: string;
  okText?: string;
  pageLoading?: boolean;
}>();

export const resetModalAction = createAction('ui/RESET_MODAL_ACTION')();

export const toastAction = createAction('ui/TOAST_ACTION')();

export const resetToastAction = createAction('ui/RESET_TOAST_ACTION')();
export const pathAction = createAction(PATH_ACTION)<{
  prev?: string;
  current?: string;
}>();

const actions = {
  modalAction,
  resetModalAction,
  openMainNavAction,
  closeMainNavAction,
  activeMenuStyleAction,
  pageLoaderAction,
  pageLoaderForceQuitMessageAction,
  pageLoaderForceQuitAction,
  popupAction,
  pathAction,
  toastAction,
  resetToastAction
};

export type UiAction = ActionType<typeof actions>;
