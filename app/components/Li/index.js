/**
 *
 * Li
 *
 */

import React,{useState} from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import Folder from '../Folder';
import './Li.scss';
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
  return (<>
    
    <li>
      {isOpen?<i className='fas fa-folder-open'></i>:<i className='fas fa-folder'></i>} 
      <div className="custom-control custom-checkbox mb-3">
        <input type="checkbox" className="custom-control-input" onClick={(e)=>{onOpen(e,path)}} id={path} name="example1" />
        <label className="custom-control-label" htmlFor={path}>{name}</label>
      </div>
      {/* <input type="checkbox" value="" onClick={(e)=>{onOpen(e,path)}}/> */}
      <Folder  
        key={path}
        path={path}
        name={name}
        childrenList={childrenList}
        onLoadChildren={onLoadChildren}
      /></li></>);
}

Li.propTypes = {
  onLoadChildren:propTypes.func,
  path:propTypes.string,
  name:propTypes.string,
  childrenList:propTypes.array,
};

export default Li;
