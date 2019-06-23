/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <div>
      <div className="nav-bar">
        <Link className="link" to="/">
          folders
        </Link>
        <Link className="link" to="/summary">
          summary
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
