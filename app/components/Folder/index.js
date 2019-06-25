import React, { useState, useEffect } from 'react';
// import { React } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import getChildren from './getChildren';
import {
  makeSelectFolders,
  makeSelectLoading,
  makeSelectError,
} from '../../containers/App/selectors';
import reducer from '../../containers/App/reducer';
import saga from '../../containers/App/saga';
import { loadFolders } from '../../containers/App/actions';
import './Folder.css';
const key = 'folder';
// const foldersListProps = {
//     loading,
//     error,
//     folders,
//     onLoadFolders,
//   };

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
function Folder({ path, name, onLoadFolders }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    // if (currentPath && currentPath.trim().length > 0)
    if (path === '') onLoadFolders(path);
  }, []);
  const onOpen = event => {
    if (event.target.checked) {
      setChildren(getChildren(path));
      console.log(children);
    } else {
      setChildren([]);
    }
  };
  const [children, setChildren] = useState([]);
  const renderChildren = () =>
    children.map(p =>
      p.type === 'folder' ? <Folder path={p.path} name={p.name} /> : '',
    );

  const renderFiles = () =>
    children.map(p => (p.type === 'file' ? <div> file</div> : ''));

  return (
    <div>
      <div>im {name} folder</div>
      <input type="checkbox" onClick={onOpen} />
      {renderChildren()}
      {renderFiles()}
    </div>
  );
}
Folder.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
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
console.log(1);
console.log(mapStateToProps.folders);
export function mapDispatchToProps(dispatch) {
  return {
    onLoadFolders: () => dispatch(loadFolders()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Folder);
