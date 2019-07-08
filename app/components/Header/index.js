/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import GRTH from '../../images/Capture2.JPG';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <div className="wrapper">
      <img src={GRTH} alt="imageGRTH" />
      <div className="nav-bar">
        <Link className="link" to="/homePage">
          home page
        </Link>
        {'|'}
        <Link className="link" to="/folders">
          folders
        </Link>
        {'|'}
        <Link className="link" to="/summary">
          summary
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
