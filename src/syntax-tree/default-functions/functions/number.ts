import { Function } from '../../Function';
import { Parameter } from '../../Parameter';

Function.functions.push({
    name: 'round',
    scopeType: 'number',
    eval: (scope: number, parameters: Parameter[]) => ({ type: 'number', value: Math.round(scope) }),
});
Function.functions.push({
    name: 'toString',
    scopeType: 'number',
    eval: (scope: number, parameters: Parameter[]) => ({ type: 'string', value: String(scope) }),
});
Function.functions.push({
    name: 'sqrt',
    scopeType: 'number',
    eval: (scope: number, parameters: Parameter[]) => ({ type: 'number', value: Math.sqrt(scope) }),
});
