/* eslint-disable indent */
import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';

// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// import reducer from '../../containers/App/reducer';

import saga from './saga';
import './Folder.css';
import File from '../File';
const key = 'folder';

const Folder = ({ path, name, childrenList, onLoadChildren}) => {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    if (path === '') onLoadChildren(path);
  }, []);
const [isOpen,setIsOpen]=useState(false);
  const onOpen = event => {
    if (event.target.checked) {
      // TODO: to empty by open/close boolean feature
      onLoadChildren(path);
      setIsOpen(true);
    }
    else
    {
      setIsOpen(false);
    }
  };
  
  const renderChildren = () =>
    childrenList.map(child =>
      child.type === 'folder' ? (
        <li className={isOpen?"list-group-item-active":"list-group-item"}>
        <Folder 
          key={child.path}
          path={child.path}
          name={child.name}
          childrenList={child.children}
          onLoadChildren={onLoadChildren}
        /></li>
      ) : (
         <li> <File fileType={child.path.slice(child.path.lastIndexOf('.') + 1)} /></li>
        ),
    );
  return (
    <div>
      {path !== '' && <input type="checkbox" value="" onClick={onOpen}/>} {name}
      <ul>
      {renderChildren()}
</ul>
      <div className="checkbox disabled">

      </div>
    </div>
  );
}


Folder.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  childrenList: PropTypes.array,
  onLoadChildren: PropTypes.func,
};
export default Folder;
