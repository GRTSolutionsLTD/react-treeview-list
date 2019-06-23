/**
 *
 * FoldersPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFoldersPage from './selectors';
import reducer from './reducer';

import './folders.scss';

export function FoldersPage() {
  useInjectReducer({ key: 'foldersPage', reducer });

  return (
    <div>
      <Helmet>
        <title>Folders Page</title>
        <meta name="description" content="Description of FoldersPage" />
      </Helmet>
      <div className="danger"> Test something</div>
    </div>
  );
}

FoldersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  foldersPage: makeSelectFoldersPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FoldersPage);
