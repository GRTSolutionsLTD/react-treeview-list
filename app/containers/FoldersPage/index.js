import React from 'react';
// import useState from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Folder from '../../components/Folder/index';

import { loadChildren, createNewFolder,deleteItem } from '../App/actions';
import './folders.scss';
export function FoldersPage({folders, onLoadChildren,createFolder,deleteItems}) {
  return (
    <div>
      <Helmet>
        <title>Folders Page</title>
        <meta name="description" content="Description of FoldersPage" />
      </Helmet>
      <button type="button" className="buttonDelete" onClick={deleteItems}><i className='fas fa-trash-alt'></i></button>
 
      {/* <ul>
        <i className="fa fa-folder-o" ></i><li  className="list-group-item active">animal</li>
        <ul><li className="list-group-item">dog</li> <ul><li className="list-group-item">images</li></ul> <li className="list-group-item">cat</li></ul>
        <li className="list-group-item">shop</li>
        
      </ul> */}
      {/* <ul><li  className="list-group-item"><ul  className="list-group-item-active"><li  className="list-group-item">fgfd</li>
        <li  className="list-group-item">gfdg</li></ul></li><li>fgfd</li></ul> */}
      <Folder createFolder={createFolder} key={folders.path} onLoadChildren={onLoadChildren} path={folders.path} name={folders.name} childrenList={folders.children} chooseDetails={chooseDetails} />
    </div>
  );
}

let choosePathes = [];

const chooseDetails = path =>{ 
  if(choosePathes.includes(path))
    choosePathes = choosePathes.filter(pathItem => pathItem!==path);
  else choosePathes.push(path); 
};

FoldersPage.propTypes = {
  folders: PropTypes.object,
  onLoadChildren: PropTypes.func,
  deleteItems:PropTypes.func,
  createFolder:PropTypes.func,
};
const mapStateToProps = (state) => ({folders: state.global.rootFolders})

const mapDispatchToProps = (dispatch) => ({
  onLoadChildren: path => dispatch(loadChildren(path)),
  deleteItems: () => dispatch(deleteItem(choosePathes)),
  createFolder: (path,name)=>dispatch(createNewFolder(path,name)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps  
);
export default compose(withConnect)(FoldersPage);
