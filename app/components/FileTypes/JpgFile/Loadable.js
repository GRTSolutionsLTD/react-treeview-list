/**
 *
 * Asynchronously loads the component for JpgFile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
