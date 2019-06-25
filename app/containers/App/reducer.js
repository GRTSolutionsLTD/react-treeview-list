/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';
import {
  LOAD_FOLDERS_SUCCESS,
  LOAD_FOLDERS,
  LOAD_FOLDERS_ERROR,
} from './constants';
// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentPath: '',
  folders: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FOLDERS:
        draft.loading = true;
        draft.error = false;
        draft.folders = [];
        break;

      case LOAD_FOLDERS_SUCCESS:
        draft.folders = action.folders;
        draft.loading = false;
        break;
      case LOAD_FOLDERS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
