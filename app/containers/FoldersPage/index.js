import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectFolders } from 'containers/App/selectors';
import Folder from '../../components/Folder/index';
import './folders.scss';

export function FoldersPage({folders}) {
  return (
    <div>
      <Helmet>
        <title>Folders Page</title>
        <meta name="description" content="Description of FoldersPage" />
      </Helmet>
      <Folder key={0} path={folders.path} name={folders.name} childrenList={folders.children} />
    </div>
  );
}

FoldersPage.propTypes = {
  folders: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  folders: makeSelectFolders(),
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FoldersPage);
