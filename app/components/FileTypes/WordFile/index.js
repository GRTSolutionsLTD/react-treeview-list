/**
 *
 * WordFile
 *
 */
import PropTypes from 'prop-types';

import React from 'react';
import "../../File/file.scss";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WordFile({ name, path }) {
  return (
    <div>
      <i className="far fa-file-word files-icon word"></i>
      {name}
      {path}
    </div>
  );
}

WordFile.propTypes = { name: PropTypes.string, path: PropTypes.string };

export default WordFile;
