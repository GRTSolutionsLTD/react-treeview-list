/**
 *
 * Folder
 *
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectFolders,
  makeSelectLoading,
  makeSelectError,
} from '../../containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFolders } from '../../containers/App/actions';
const key = 'folder';
// const foldersListProps = {
//     loading,
//     error,
//     folders,
//     onLoadFolders,
//   };

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Folder(props, loading, error, folders, onLoadFolders) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    // if (currentPath && currentPath.trim().length > 0)
    // eslint-disable-next-line react/prop-types
    onLoadFolders(props.path);
  }, []);

  return (
    <>
      <div>im a folder</div>
      <input type="checkbox" />
    </>
  );
}
Folder.propTypes = {
  props: {
    path: PropTypes.string,
  },
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
    onLoadFolders: path => dispatch(loadFolders(path)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Folder);
