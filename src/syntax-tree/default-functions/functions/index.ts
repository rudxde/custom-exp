import { addDefaults as numberDefaults } from './number';
import { addDefaults as stringDefaults } from './string';
import { addDefaults as booleanDefaults } from './boolean';
import { addDefaults as arrayDefaults } from './array';
import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {
    numberDefaults(functionality);
    stringDefaults(functionality);
    booleanDefaults(functionality);
    arrayDefaults(functionality);
}
