import produce from 'immer';
import { LOAD_CHILDREN_SUCCESS, LOAD_CHILDREN, LOAD_CHILDREN_ERROR, DELETE_ITEMS } from './constants';// DELETE_ITEMS
import * as data from '../../data/folders.json';

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
        draft.rootFolders = {...state.rootFolders};
        draft.loading = false;
        break;

      case LOAD_CHILDREN_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    
      case DELETE_ITEMS:
        if(action.choosePathes.length>=3)
        // eslint-disable-next-line no-alert
        { if (window.confirm(`Are you sure want to delete ${action.choosePathes.length} items ?`)) 
        { deleteItems(data.default,data.default, action.choosePathes);
          action.choosePathes.length=0;
        }}
        else{
          deleteItems(data.default,data.default, action.choosePathes);
          action.choosePathes.length=0
        }
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

const deleteItems = (dataList, dat, choosePathes) => {

  for (let i = 0; i < dataList.length; i += 1) 
  {
    const curentPath = dataList[i].path;
    if (choosePathes.includes(curentPath))
      if(dat===data.default)
        data.default=dataList.filter(item => item.path !== curentPath);
      else
      {dat.children=dataList.filter(item => item.path !== curentPath); 
        dataList=dataList.filter(item => item.path !== curentPath);
        i-=1;
      }
    else if(dataList[i].children)
      deleteItems(dataList[i].children, dataList[i],choosePathes);
  }
};

export default appReducer;
