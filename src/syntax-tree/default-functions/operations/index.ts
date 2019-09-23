import { Functionality } from '../../../functionality';

import { addDefaults as numberDefaults } from './number';
import { addDefaults as stringDefaults } from './string';
import { addDefaults as booleanDefaults } from './boolean';

export function addDefaults(functionality: Functionality): void {
    numberDefaults(functionality);
    stringDefaults(functionality);
    booleanDefaults(functionality);
}
