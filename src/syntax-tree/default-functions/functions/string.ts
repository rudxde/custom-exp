import { Function } from '../../Function';
import { Parameter } from '../../Parameter';

Function.functions.push({
    name: 'toString',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => ({ value: scope, type: 'string' }),
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
    name: 'isEmpty',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'boolean',
            value: !Boolean(scope),
        };
    },
});

Function.functions.push({
    name: 'isNotEmpty',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'boolean',
            value: Boolean(scope),
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

Function.functions.push({
    name: 'length',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'number',
            value: scope.length,
        };
    },
});

Function.functions.push({
    name: 'charCodeAt',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const index = Parameter.getParam(parameters, 0, 'index', 'number');
        return {
            type: 'number',
            value: scope.charCodeAt(index.value),
        };
    },
});


Function.functions.push({
    name: 'concat',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const strings = Parameter.getParam(parameters, 0, 'strings', 'array');
        return {
            type: 'string',
            value: scope.concat(...strings.value),
        };
    },
});

Function.functions.push({
    name: 'replace',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const find = Parameter.getParam(parameters, 0, 'find', 'string');
        const replace = Parameter.getParam(parameters, 0, 'replace', 'string');
        return {
            type: 'string',
            value: scope.replace(find.value, replace.value),
        };
    },
});

Function.functions.push({
    name: 'indexOf',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const find = Parameter.getParam(parameters, 0, 'find', 'string');
        return {
            type: 'number',
            value: scope.indexOf(find.value),
        };
    },
});

Function.functions.push({
    name: 'endsWith',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const find = Parameter.getParam(parameters, 0, 'find', 'string');
        return {
            type: 'boolean',
            value: scope.endsWith(find.value),
        };
    },
});

Function.functions.push({
    name: 'startsWith',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const find = Parameter.getParam(parameters, 0, 'find', 'string');
        return {
            type: 'boolean',
            value: scope.startsWith(find.value),
        };
    },
});

Function.functions.push({
    name: 'trim',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'string',
            value: scope.trim(),
        };
    },
});

Function.functions.push({
    name: 'trimLeft',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'string',
            value: scope.trimLeft(),
        };
    },
});

Function.functions.push({
    name: 'trimRight',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        return {
            type: 'string',
            value: scope.trimRight(),
        };
    },
});

Function.functions.push({
    name: 'split',
    scopeType: 'string',
    eval: (scope: string, parameters: Parameter[]) => {
        const separator = Parameter.getParam(parameters, 0, 'separator', 'string');
        return {
            type: 'array',
            value: scope.split(separator.value),
        };
    },
});

