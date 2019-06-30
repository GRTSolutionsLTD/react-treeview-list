/**
 *
 * Li
 *
 */

import {React,useState} from 'react';
import propTypes from 'prop-types';
import Folder from '../Folder';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Li({onLoadChildren,path,name,childrenList}) {
  const [isOpen,setIsOpen]=useState(false);
  const onOpen = (event,childPath)=> {
    if (event.target.checked) {
      // TODO: to empty by open/close boolean feature
      onLoadChildren(childPath);
      setIsOpen(true);
    }
    else
    {
      setIsOpen(false);
    }
  };
  return  <li className={isOpen?"list-group-item":"list-group-item-active"}>
    {isOpen?<i className='fas fa-folder-open'></i>:<i className='fas fa-folder'></i>} 
    <input type="checkbox" value="" onClick={(e)=>{onOpen(e,path)}}/>{name}
    <Folder  
      key={path}
      path={path}
      name={name}
      childrenList={childrenList}
      onLoadChildren={onLoadChildren}
    /></li> ;
}

Li.propTypes = {
  onLoadChildren:propTypes.func,
  path:propTypes.string,
  name:propTypes.string,
  childrenList:propTypes.array,
};

export default Li;
