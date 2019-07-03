/* eslint-disable indent */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// import reducer from '../../containers/App/reducer';
import saga from './saga';
import './Folder.css';
import File from '../File';
// eslint-disable-next-line import/no-cycle
import Li from '../Li';
const key = 'folder';

const Folder = ({ path, childrenList, onLoadChildren,createFolder}) => {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    if (path === '') onLoadChildren(path);
  }, []);

  

  const renderChildren = () =>
    childrenList.map(child =>
      child.type === 'folder' ? (
       <Li createFolder={createFolder} name={child.name} path={child.path} childrenList={child.children} onLoadChildren={onLoadChildren}/>
      ) : (
         <li key={child.path} className="list-group-item"> <File fileType={child.path.slice(child.path.lastIndexOf('.') + 1)} /></li>
        ),
    );
  return (
    <>
      <ul>
      {renderChildren()}
</ul>
    </>
  );
}


Folder.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  childrenList: PropTypes.array,
  onLoadChildren: PropTypes.func,
  createFolder:PropTypes.func,
};
export default Folder;
