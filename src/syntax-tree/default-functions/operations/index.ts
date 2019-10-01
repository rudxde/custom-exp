import { Functionality } from '../../../functionality';

import { addDefaults as numberDefaults } from './number';
import { addDefaults as stringDefaults } from './string';
import { addDefaults as booleanDefaults } from './boolean';
import { addDefaults as arrayDefaults } from './array';

export function addDefaults(functionality: Functionality): void {
    numberDefaults(functionality);
    stringDefaults(functionality);
    booleanDefaults(functionality);
    arrayDefaults(functionality);
}
