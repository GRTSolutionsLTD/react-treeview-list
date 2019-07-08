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

function Li({onLoadChildren,path,name,childrenList,chooseDetails}) {
  const [isChoose,setIsChoose]=useState(false);
  const [isOpen,setIsOpen]=useState(false);
  // const [children,setChildren]=useState(childrenList);

  // useEffect(()=>{if(isOpen)
  //   setChildren(childrenList);
  // else
  //   setChildren([]);
  // },[isOpen]);
  const onOpen = (event,childPath)=> {
    if (!isOpen) {
      // TODO: to empty by open/close boolean feature
      onLoadChildren(childPath);
      setIsOpen(true);
    }
    else
    {
      setIsOpen(false);
    }
  };

  const onChoose = (event, childPath) =>{
    if(!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    chooseDetails(childPath);
  }
  return (<>
    
    <li className="li_folders"><div className="folder_wrapper">
      <div className="custom-control custom-checkbox mb-3">
        <input type="checkbox" className="custom-control-input"  id={path} name="example1" onClick={(e)=>{onChoose(e,path)}} />
        <label className="custom-control-label" htmlFor={path}><button className="folder_button" type="button" onClick={(e)=>{onOpen(e,path)}}>{name}</button></label>
      </div>
      {isOpen?<i className='fas fa-folder-open'></i>:<i className='fas fa-folder'></i>} 
    </div>
    {/* <input type="checkbox" value="" onClick={(e)=>{onOpen(e,path)}}/> */}
    {isOpen? 
      <Folder  
        key={path}
        path={path}
        name={name}
        childrenList={childrenList}
        onLoadChildren={onLoadChildren}
        chooseDetails={chooseDetails}
      
      />:''}</li></>);
  
}

Li.propTypes = {
  onLoadChildren:propTypes.func,
  path:propTypes.string,
  name:propTypes.string,
  childrenList:propTypes.array,
  chooseDetails:propTypes.func,
};

export default Li;
