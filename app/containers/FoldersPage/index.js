/**
 *
 * FoldersPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectFolders,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFolders } from '../App/actions';

import './folders.scss';
const key = 'foldersPage';

export function FoldersPage({ loading, error, folders, onLoadFolders }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    // if (currentPath && currentPath.trim().length > 0)
    onLoadFolders('');
  }, []);

  const foldersListProps = {
    loading,
    error,
    folders,
    onLoadFolders,
  };
  console.log(foldersListProps);
  return (
    <div>
      <Helmet>
        <title>Folders Page</title>
        <meta name="description" content="Description of FoldersPage" />
      </Helmet>
      <div className="danger"> Test something</div>
      <button type="button" onClick={onLoadFolders}>
        hello
      </button>
    </div>
  );
}

FoldersPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string,
  ]),
  folders: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onLoadFolders: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  folders: makeSelectFolders(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadFolders: () => dispatch(loadFolders()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FoldersPage);
