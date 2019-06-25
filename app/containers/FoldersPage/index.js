/**
 *
 * FoldersPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Folder from '../../components/Folder/index';
import './folders.scss';
export function FoldersPage() {
  // if (currentPath && currentPath.trim().length > 0)
  return (
    <div>
      <Helmet>
        <title>Folders Page</title>
        <meta name="description" content="Description of FoldersPage" />
      </Helmet>
      <Folder path="" />
    </div>
  );
}

// FoldersPage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool,
//     PropTypes.string,
//   ]),
//   folders: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   onLoadFolders: PropTypes.func,
// };

const mapStateToProps = createStructuredSelector({});
export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FoldersPage);
