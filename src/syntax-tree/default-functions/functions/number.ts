import { Parameter } from '../../Parameter';
import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {

functionality.addFunctions({
    name: 'round',
    scopeType: 'number',
    eval: (scope: number, parameters: Parameter[]) => ({ type: 'number', value: Math.round(scope) }),
});
functionality.addFunctions({
    name: 'toString',
    scopeType: 'number',
    eval: (scope: number, parameters: Parameter[]) => ({ type: 'string', value: String(scope) }),
});
functionality.addFunctions({
    name: 'sqrt',
    scopeType: 'number',
    eval: (scope: number, parameters: Parameter[]) => ({ type: 'number', value: Math.sqrt(scope) }),
});
}