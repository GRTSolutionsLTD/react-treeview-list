import { makeSelectFolders } from '../../containers/App/selectors';

const getChildren = path => {
  let OurData = makeSelectFolders();
  const partPath = path.split('/');
  let i;
  let j;
  for (i = 0; i < partPath.length; i += 1)
    for (j = 0; j < OurData.length; j += 1)
      if (OurData[j].name === partPath[i]) {
        OurData = OurData[j].children;
        break;
      }
  return OurData;
};
export default getChildren;
//   for (let itemPath in partPath)
//     for (let itemData in OurData)
//  if (OurData[itemData].name == partPath[itemPath])
//  OurData = OurData[itemData].children
