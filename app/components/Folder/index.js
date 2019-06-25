import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from '../../containers/App/reducer';
import { loadChildren } from '../../containers/App/actions';

import saga from './saga';
import './Folder.css';

// import ExcelFile from '../FileTypes/ExcelFile';
// import JpgFile from '../FileTypes/JpgFile';
// import WordFile from '../FileTypes/WordFile';

const key = 'folder';

const Folder = ({ path, name, childrenList, onLoadChildren }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    if (path === '') onLoadChildren(path);
  }, []);

  const onOpen = event => {
    if (event.target.checked) {
      // TODO: to empty by open/close boolean feature
      onLoadChildren(path);
    }
  };

  const renderChildren = () =>
    childrenList.map(child =>
      child.type === 'folder' ? (
        <Folder
          key={child.path}
          path={child.path}
          name={child.name}
          childrenList={child.children}
          onLoadChildren={onLoadChildren}
        />
      ) : (
        <div>file {child.name}</div>
      ),
    );

  // const returnFile = fileType => {
  //   switch (fileType) {
  //     case 'jpg':
  //       return <JpgFile key={1} name={fileType} />;
  //     case 'excel':
  //       return <ExcelFile key={1} name={fileType} />;
  //     case 'word':
  //       return <WordFile key={1} name={fileType} />;
  //     default:
  //       return <div />;
  //   }
  // };

  return (
    <div>
      <div>{name}</div>
      <input type="checkbox" onClick={onOpen} className="checkbox-sm" />
      {renderChildren()}
    </div>
  );
}
Folder.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  childrenList: PropTypes.array,
  onLoadChildren: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
  onLoadChildren: path => dispatch(loadChildren(path)),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Folder);
