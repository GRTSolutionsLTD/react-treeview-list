/**
 *
 * ExcelFile
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
import "../../File/file.scss";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ExcelFile({ name, path }) {
  return (
    <div>
      <i className="far fa-file-excel files-icon excell"></i>
      {name}
      {path}
    </div>
  );
}

ExcelFile.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default ExcelFile;
