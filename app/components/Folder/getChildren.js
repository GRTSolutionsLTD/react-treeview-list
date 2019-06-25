// import { createStructuredSelector } from 'reselect';
// import { select } from 'redux-saga/effects';
// import { makeSelectFolders } from '../../containers/App/selectors';
import * as data from '../../data/folders.json';
// eslint-disable-next-line func-names
export default function getChildren(path) {
  // let OurData = select(makeSelectFolders());
  let OurData = data.default;
  const partPath = path.split('/');
  let i;
  let j;
  // let OurData = data.default;
  // console.log(OurData);
  // return { ...makeSelectFolders() };
  if (path === '') return OurData;
  // להוסיף את ההתחלה
  for (i = 0; i < partPath.length; i += 1)
    for (j = 0; j < OurData.length; j += 1)
      if (OurData[j].name === partPath[i]) {
        OurData = OurData[j].children;
        break;
      }
  return OurData;
}
//   for (let itemPath in partPath)
//     for (let itemData in OurData)
//  if (OurData[itemData].name == partPath[itemPath])
//  OurData = OurData[itemData].children
