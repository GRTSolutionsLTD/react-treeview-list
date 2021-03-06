import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import Folder from '../Folder';
import './Li.scss';
import AddFolder from '../AddFolder';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


function Li({ onLoadChildren, path, name, childrenList, createFolder,chooseDetails }) {
  const [isChoose,setIsChoose]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [children,setChildren]=useState(childrenList);

  useEffect(() => {
    // if (isOpen)
    // setChildren(childrenList);
    // else
    // setChildren([]);
  }, [isOpen]);
  const onOpen = (event, childPath) => {
    if (!isOpen) {
      // TODO: to empty by open/close boolean feature
      onLoadChildren(childPath);
      setIsOpen(true);
    }
    else {
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
      {isOpen ? <i className='fas fa-folder-open folder-icon'></i> : <i className='fas fa-folder folder-icon'></i>}
      <button className="folder_button" type="button" onClick={(e) => { onOpen(e, path) }}>{name}</button>
      {/* <div className="custom-control custom-checkbox mb-3" id="check-box" >
        <label className="custom-control-label" htmlFor={path}>
        </label>
        <input type="checkbox" className="custom-control-input" id={path} disable="false"/>
      </div> */}
      <div className="custom-control custom-checkbox mb-3" style={{position : "relative",top:"25%" , left:"25%", display:"inline-block",zIndex:"1"}}>
        <input type="checkbox" className="custom-control-input"  id={path} name={path} onClick={(e)=>{onChoose(e,path)}} />
        <label className="custom-control-label" htmlFor={path}> </label>
      </div>
    </div><AddFolder createNewFolder={createFolder} path={path} />
    {isOpen ? <Folder
      key={path}
      path={path}
      name={name}
      childrenList={childrenList}
      onLoadChildren={onLoadChildren}
      createFolder={createFolder} /> : null}
    </li>
  </>);
}

Li.propTypes = {
  onLoadChildren: propTypes.func,
  path: propTypes.string,
  name: propTypes.string,
  childrenList: propTypes.array,
  createFolder: propTypes.func,
  chooseDetails:propTypes.func,
};

export default Li;
