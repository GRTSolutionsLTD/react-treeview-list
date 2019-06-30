/* eslint-disable no-unused-expressions */
/**
 *
 * Footer
 *
 */
// import GRTHAllRights from '../../images/baseline-copyright-24px.svg';
import React from 'react';
import './footer.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Glyphicon } from 'react-bootstrap';
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
  integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
  crossOrigin="anonymous"
/>;
function Footer() {
  return (
    <div>
      <p className="copyRights">
        <i className="far fa-copyright">fjd</i>
        all rights reserved
      </p>
    </div>
  );
}
Footer.propTypes = {};

export default Footer;
