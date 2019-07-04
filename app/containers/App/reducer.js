import produce from 'immer';
import { LOAD_CHILDREN_SUCCESS, LOAD_CHILDREN, LOAD_CHILDREN_ERROR ,CREATE_FOLDER} from './constants';
import *as data from '../../data/folders.json';
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
      case CREATE_FOLDER:
        const pathList = action.path.split('/');
        let count=0;
        let folders = data.default;
        if(action.name!==''&&action.name!==' '){
          if (action.path !== '') {
            pathList.forEach(pathName => {
              count+=1;
              if (pathName !== ''){
                folders = folders.find(folde => folde.name === pathName);
                if(pathList.length!==count)
                  folders=folders.children;}
            });
            folders.children.push({type:"folder",name:action.name,path:`${action.path}/${action.name}`,children:[]});
          }
          else {
            folders.push({type:"folder",name:action.name,path: `/${action.name}`});
          }}
        const newState = JSON.parse(JSON.stringify(state.rootFolders));
        // const newState = state.rootFolders;
        newState.children = JSON.parse(JSON.stringify(data.default));
        draft.rootFolders = newState;
        break;
      case LOAD_CHILDREN_SUCCESS:
        const folder = getFolderByChildPath(state.rootFolders, action.path);
        folder.children = action.children;
        draft.rootFolders = {...state.rootFolders};
        draft.loading = false;
        break;

      case LOAD_CHILDREN_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      // case CREATE_FOLDER_SUCCESS:
      //   draft.rootFolders = {...state.rootFolders};
      //   break;
      default:
      
    } });

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
