/**
 *
 * WordFile
 *
 */
import PropTypes from 'prop-types';

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WordFile({ name, path }) {
  return (
    <div>
      {name}
      {path}
    </div>
  );
}

WordFile.propTypes = { name: PropTypes.string, path: PropTypes.string };

export default WordFile;
