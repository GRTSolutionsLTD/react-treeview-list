/**
 *
 * JpgFile
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function JpgFile({ name, path }) {
  return (
    <div>
      {name}
      {path}
    </div>
  );
}

JpgFile.propTypes = { name: PropTypes.string, path: PropTypes.string };

export default JpgFile;
