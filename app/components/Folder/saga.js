import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_CHILDREN } from 'containers/App/constants';
import { childrenLoaded, childrenLoadingError } from 'containers/App/actions';
import * as data from '../../data/folders.json';

export function* loadChildren(action) {
  try {
    const children = getChildrenByPath(action.path);
    yield put(childrenLoaded(action.path, children));
  } catch (err) {
    yield put(childrenLoadingError(err));
  }
}

const getChildrenByPath = path => {
  const pathList = path.split('/');
  let folders = data.default;

  if (path !== '') {

    pathList.forEach(pathName => {
      if (pathName !== '')
        folders = folders.find(folder => folder.name === pathName).children;
    });
  }
  folders = folders.map(folder => {
    const currentFolder = Object.assign({}, folder);
    if(currentFolder.type==='folder')
      currentFolder.children = [];
    return currentFolder;
  });
  return folders;
};

/**
 * Root saga manages watcher lifecycle
 */
export default function* childrenData() {
  yield takeLatest(LOAD_CHILDREN, loadChildren);
}
