import { Parameter } from '../../parameter';
import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {

    functionality.addFunctions({
        name: 'toString',
        scopeType: 'boolean',
        eval: (scope: boolean, parameters: Parameter[]) => ({ type: 'string', value: String(scope) }),
    });

    functionality.addFunctions({
        name: 'toNumber',
        scopeType: 'boolean',
        eval: (scope: boolean, parameters: Parameter[]) => ({ type: 'number', value: scope ? 1 : 0 }),
    });

    functionality.addFunctions({
        name: 'not',
        scopeType: 'boolean',
        eval: (scope: boolean, parameters: Parameter[]) => ({ type: 'boolean', value: !scope }),
    });
}
