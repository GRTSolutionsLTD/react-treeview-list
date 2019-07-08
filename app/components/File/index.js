/**
 *
 * File
 *
 */
import PropTypes from 'prop-types';
import React, {useState} from 'react';// 
import ExcelFile from '../FileTypes/ExcelFile';
import WordFile from '../FileTypes/WordFile';
import JpgFile from '../FileTypes/JpgFile';
import "./file.scss";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


function File({fileType, chooseDetails, path}) {// 
 
  const [isChoose,setIsChoose]=useState(false);
  const renderFileAsType=()=>{
    switch (fileType) {
      case 'jpg':
        return  <JpgFile key={1} name={fileType}/>;
      case 'excell':
        return <ExcelFile key={1} name={fileType} />;
      case 'word':
        return <WordFile key={1} name={fileType} />;
      default:
        return <div />;
    }

  }
  const onChoose = () =>{
    if(!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    chooseDetails(path);
  };
  return <div className="currentFile">
    <div className="custom-control custom-checkbox mb-3">
      <input type="checkbox" className="custom-control-input" id={path} name="example1" onClick={(e)=>{onChoose(e,path)}} /> 
      <label className="custom-control-label" htmlFor={path}> </label>
    </div>
    {renderFileAsType()}</div>;

}



File.propTypes = {
  fileType: PropTypes.string,
  chooseDetails:PropTypes.func,
  path:PropTypes.string,
};
export default File;
