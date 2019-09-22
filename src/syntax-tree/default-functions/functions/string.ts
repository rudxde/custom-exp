import { Function } from '../../Function';
import { Parameter } from '../../Parameter';

Function.functions.push({
    name: 'toString',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => ({value:  scope, type: 'string'}),
});
Function.functions.push({
    name: 'repeat',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const repeatCounter = parameters[0].expression.eval();
        if (repeatCounter.type !== 'number') throw new Error('Wrong type for parameter of repeat. Expected number but got ' + repeatCounter.type);
        return {
            type: 'string',
            value: scope.repeat(repeatCounter.value),
        };
    },
});
Function.functions.push({
    name: 'charAt',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const indexCounter = parameters[0].expression.eval();
        if (indexCounter.type !== 'number') throw new Error('Wrong type for parameter of repeat. Expected number but got ' + indexCounter.type);
        return {
            type: 'string',
            value: scope.charAt(indexCounter.value),
        };
    },
});
Function.functions.push({
    name: 'subString',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const startParameter = parameters[0].expression.eval();
        if (startParameter.type !== 'number') throw new Error('Wrong type for startParameter of substring. Expected number but got ' + startParameter.type);
        const endParameter = parameters[1].expression.eval();
        if (endParameter.type !== 'number') throw new Error('Wrong type for endParameter of substring. Expected number but got ' + endParameter.type);
        return {
            type: 'string',
            value: scope.substring(startParameter.value, endParameter.value),
        };
    },
});

Function.functions.push({
    name: 'toLowerCase',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'string',
            value: scope.toLowerCase(),
        };
    },
});
Function.functions.push({
    name: 'toUpperCase',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'string',
            value: scope.toUpperCase(),
        };
    },
});
Function.functions.push({
    name: 'parseInt',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'number',
            value: parseInt(scope),
        };
    },
});
