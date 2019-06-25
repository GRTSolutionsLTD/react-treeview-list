import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_FOLDERS } from 'containers/App/constants';
import { foldersLoaded, foldersLoadingError } from 'containers/App/actions';
import * as data from '../../data/folders.json';

export function* loadFolders() {
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // reader.onload = async (e) => {
    //   const text = (e.target.result
    console.log(data);
    // };
    yield put(foldersLoaded(data.default));
    // Call our request helper (see 'utils/request')
  } catch (err) {
    yield put(foldersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_FOLDERS, loadFolders);
}
