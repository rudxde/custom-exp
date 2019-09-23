import { Functionality } from '../../functionality';

import { addDefaults as operations } from './operations/';
import { addDefaults as functions } from './functions/';

export function addDefaults(functionality: Functionality): void {
    operations(functionality);
    functions(functionality);
}
