/**
 *
 * File
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
import ExcelFile from '../FileTypes/ExcelFile';
import WordFile from '../FileTypes/WordFile';
import JpgFile from '../FileTypes/JpgFile';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
function File({fileType}) {
  const renderFileAsType=()=>{
    switch (fileType) {
      case 'jpg':
        return <JpgFile key={1} name={fileType} />;
      case 'npg':
        return <ExcelFile key={1} name={fileType} />;
      case 'docs':
        return <WordFile key={1} name={fileType} />;
      default:
        return <div />;
    }

  }
  return renderFileAsType();
}

File.propTypes = {
  fileType: PropTypes.string
};
export default File;
