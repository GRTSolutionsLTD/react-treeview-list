/**
 *
 * ExcelFile
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ExcelFile({ name, path }) {
  return (
    <div>
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
