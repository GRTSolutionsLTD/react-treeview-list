import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Folder from '../../components/Folder/index';
import { loadChildren } from '../App/actions';
import './folders.scss';
export function FoldersPage({folders, onLoadChildren}) {
  return (
    <div>
      <Helmet>
        <title>Folders Page</title>
        <meta name="description" content="Description of FoldersPage" />
      </Helmet>
      {/* <ul>
        <i className="fa fa-folder-o" ></i><li  className="list-group-item active">animal</li>
        <ul><li className="list-group-item">dog</li> <ul><li className="list-group-item">images</li></ul> <li className="list-group-item">cat</li></ul>
        <li className="list-group-item">shop</li>
        
      </ul> */}
      <Folder key={0} onLoadChildren={onLoadChildren} path={folders.path} name={folders.name} childrenList={folders.children} />
    </div>
  );
}

// FoldersPage.propTypes = {
//   folders: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
// };

// const mapStateToProps = createStructuredSelector({
//   folders: makeSelectFolders()
// });
FoldersPage.propTypes = {
  folders: PropTypes.object,
  onLoadChildren: PropTypes.func,
};
const mapStateToProps = (state) => ({folders: state.global.rootFolders})

const mapDispatchToProps = (dispatch) => ({
  onLoadChildren: path => dispatch(loadChildren(path)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps  
);
export default compose(withConnect)(FoldersPage);
