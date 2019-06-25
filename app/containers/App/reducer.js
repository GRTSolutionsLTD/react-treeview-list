import produce from 'immer';
import { LOAD_CHILDREN_SUCCESS, LOAD_CHILDREN, LOAD_CHILDREN_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  rootFolders: {
    path: '',
    name: '',
    children: []
  },
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CHILDREN:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_CHILDREN_SUCCESS:
        const folder = getFolderByChildPath(state.rootFolders, action.path);
        folder.children = action.children;
        draft.folders = Object.assign({}, state.rootFolders);
        draft.loading = false;
        break;

      case LOAD_CHILDREN_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      default:

    }
  });

const getFolderByChildPath = (rootFolders, childPath) => {
  const pathList = childPath.split('/');
  let folder = rootFolders;
  if (folder.name === childPath) return folder;

  pathList.forEach(pathName => {
    if (pathName !== '') {
      folder = folder.children.find(currentFolder => currentFolder.name === pathName);
    }
  });

  return folder;
};

export default appReducer;
