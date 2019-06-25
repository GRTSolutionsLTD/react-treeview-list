import {
  LOAD_FOLDERS,
  LOAD_FOLDERS_SUCCESS,
  LOAD_FOLDERS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_FOLDERS
 */
export function loadFolders() {
  return {
    type: LOAD_FOLDERS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} folders The repository data
 *
 * @return {Array}       array with a type of LOAD_FOLDERS_SUCCESS passing the repos
 */
export function foldersLoaded(folders) {
  return {
    type: LOAD_FOLDERS_SUCCESS,
    folders,
  };
}
/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_FOLDERS_ERROR passing the error
 */
export function foldersLoadingError(error) {
  return {
    type: LOAD_FOLDERS_ERROR,
    error,
  };
}
