import { Parameter } from '../../parameter';
import { Functionality } from '../../../functionality';
export function addDefaults(functionality: Functionality): void {

    functionality.addFunctions({
        name: 'toString',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => ({ value: scope, type: 'string' }),
    });

    functionality.addFunctions({
        name: 'repeat',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const repeatCounter = parameters[0].expression.eval(functionality);
            if (repeatCounter.type !== 'number') throw new Error('Wrong type for parameter of repeat. Expected number but got ' + repeatCounter.type);
            return {
                type: 'string',
                value: scope.repeat(repeatCounter.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'charAt',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const indexCounter = parameters[0].expression.eval(functionality);
            if (indexCounter.type !== 'number') throw new Error('Wrong type for parameter of repeat. Expected number but got ' + indexCounter.type);
            return {
                type: 'string',
                value: scope.charAt(indexCounter.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'subString',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const startParameter = parameters[0].expression.eval(functionality);
            if (startParameter.type !== 'number') throw new Error('Wrong type for startParameter of substring. Expected number but got ' + startParameter.type);
            const endParameter = parameters[1].expression.eval(functionality);
            if (endParameter.type !== 'number') throw new Error('Wrong type for endParameter of substring. Expected number but got ' + endParameter.type);
            return {
                type: 'string',
                value: scope.substring(startParameter.value, endParameter.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'toLowerCase',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'string',
                value: scope.toLowerCase(),
            };
        },
    });

    functionality.addFunctions({
        name: 'toUpperCase',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'string',
                value: scope.toUpperCase(),
            };
        },
    });

    functionality.addFunctions({
        name: 'isEmpty',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'boolean',
                value: !Boolean(scope),
            };
        },
    });

    functionality.addFunctions({
        name: 'isNotEmpty',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'boolean',
                value: Boolean(scope),
            };
        },
    });

    functionality.addFunctions({
        name: 'parseInt',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'number',
                value: parseInt(scope),
            };
        },
    });

    functionality.addFunctions({
        name: 'length',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'number',
                value: scope.length,
            };
        },
    });

    functionality.addFunctions({
        name: 'charCodeAt',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const index = Parameter.getParam(functionality, parameters, 0, 'index', 'number');
            return {
                type: 'number',
                value: scope.charCodeAt(index.value),
            };
        },
    });


    functionality.addFunctions({
        name: 'concat',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const strings = Parameter.getParam(functionality, parameters, 0, 'strings', 'array');
            return {
                type: 'string',
                value: scope.concat(...strings.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'replace',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const find = Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            const replace = Parameter.getParam(functionality, parameters, 0, 'replace', 'string');
            return {
                type: 'string',
                value: scope.replace(find.value, replace.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'indexOf',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const find = Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            return {
                type: 'number',
                value: scope.indexOf(find.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'endsWith',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const find = Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            return {
                type: 'boolean',
                value: scope.endsWith(find.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'startsWith',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const find = Parameter.getParam(functionality, parameters, 0, 'find', 'string');
            return {
                type: 'boolean',
                value: scope.startsWith(find.value),
            };
        },
    });

    functionality.addFunctions({
        name: 'trim',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'string',
                value: scope.trim(),
            };
        },
    });

    functionality.addFunctions({
        name: 'trimLeft',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'string',
                value: scope.trimLeft(),
            };
        },
    });

    functionality.addFunctions({
        name: 'trimRight',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            return {
                type: 'string',
                value: scope.trimRight(),
            };
        },
    });

    functionality.addFunctions({
        name: 'split',
        scopeType: 'string',
        eval: (scope: string, parameters: Parameter[]) => {
            const separator = Parameter.getParam(functionality, parameters, 0, 'separator', 'string');
            return {
                type: 'array',
                value: scope.split(separator.value),
            };
        },
    });

}