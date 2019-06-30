/**
 *
 * Asynchronously loads the component for ExcelFile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
