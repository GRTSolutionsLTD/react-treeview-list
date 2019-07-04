/**
 *
 * JpgFile
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
import "../../File/file.scss";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function JpgFile({  name}) {// fileType,
  return (
    <div>   
      <i className="far fa-file-image files-icon jpg"></i> 
      {name}
      {/* {fileType} */}
    
    </div>
  );
}

JpgFile.propTypes = { fileType: PropTypes.string, name: PropTypes.string };

export default JpgFile;
