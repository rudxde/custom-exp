import { Function } from '../../Function';
import { Parameter } from '../../Parameter';

Function.functions.push({
    name: 'toString',
    scopeType: 'boolean',
    eval: (scope: boolean, parameters: Parameter[]) => ({ type: 'string', value: String(scope) }),
});

Function.functions.push({
    name: 'toNumber',
    scopeType: 'boolean',
    eval: (scope: boolean, parameters: Parameter[]) => ({ type: 'number', value: scope ? 1 : 0 }),
});

Function.functions.push({
    name: 'not',
    scopeType: 'boolean',
    eval: (scope: boolean, parameters: Parameter[]) => ({ type: 'boolean', value: !scope }),
});
