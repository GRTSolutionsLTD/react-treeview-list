/**
 *
 * Asynchronously loads the component for WordFile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
